import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {CardElement , useStripe , useElements} from "@stripe/stripe-js"

const Payment = () => {

    const [{basket , user} , dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

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
                    rating = {item.rating} />
                )}</div>
            </div>
            <div className="payment_section">
                <div className="payment_section-title"><h3>Payment Method</h3></div>
                <div className="payment_section-content">
                    <form>
                        <CardElement />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment
