import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {CardElement , useStripe , useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import db from './firebase';

const Payment = () => {

    const [{basket , user} , dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded , setSucceeded] = useState(false);
    const [processing , setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
      const getClientSecret = async ()=>{
          const response = await axios({
              method : 'post',
              url : `/payments/create?total=${(getBasketTotal(basket)*100)}`
          })
          setClientSecret(response.data.clientSecret)
      }
      getClientSecret();
    }, [basket])

    console.log(clientSecret ,getBasketTotal(basket)*100);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret ,{
            payment_method:{
                card:elements.getElement(CardElement)
            }

        }).then(({ paymentIntent })=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket : basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            })
            

            dispatch({
                type: 'EMPTY_BASKET',
            })

            history.replace('/orders')
        })
    }
    const handleChange = (event)=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message : "")
    }

    return (
        <div className="payment_container">
        <h2> Checkout <Link to="/checkout">(Items : {basket?.length})</Link></h2>
            <div className="payment_section">
                <div className="payment_section-title"><h3>Delivery Address</h3></div>
                <div className="payment_section-content">
                <p className="payment_section-content-address padding">
                <span className="payment_section-content-address-text-email">{user?.email}</span>
                <span className="payment_section-content-address-text">101 Arizona , State valley </span><span className="payment_section-content-address-text">Dammam , Saudi Arabia</span><small className="payment_section-content-address-text">(This is a test address , i have to add address functionality in the future)</small></p></div>
            </div>
            <div className="payment_section">
                <div className="payment_section-title"><h3>Review items and delivery</h3></div>
                <div className="payment_section-content">{basket.map(item=><CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating} key={item.id}/>
                )}</div>
            </div>
            <div className="payment_section">
                <div className="payment_section-title"><h3>Payment Method</h3></div>
                <div className="payment_section-content">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_section-content-price-container">
                         <CurrencyFormat 
                             renderText={(value)=>(<h3> Order Total : {value}</h3>)}
                             decimalScale={2}
                             displayType={"text"}
                             value={getBasketTotal(basket)}
                             thousandSeparator={true}
                             prefix={"$"}
                         />
                         <button disabled={processing || disabled || succeeded} className="price-container-button">
                             <span>{processing ? <p>Processing</p>: "Buy now"}</span>
                         </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment
