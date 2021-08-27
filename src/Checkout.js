import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'


const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-container">
                <div className="checkout_left">
                    <div className="checkout_left-ad">
                        <img src="https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg" alt="ad" className="checkout-ad" />
                    </div>
                    <h3>Hello {user ? user.email : "Guest!"}</h3>
                    <div className="checkout_left-title">{basket.length === 0 ? "your shopping basket is empty" : "your shopping basket"}</div>
                    <div className="checkout_left-products"> 
                        {basket.map(item => (<CheckoutProduct
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            rating={item.rating} />))}
                    </div>
                </div>
                <div className="checkout_right"><Subtotal /></div>
            </div>
        </div>
    )
}

export default Checkout
