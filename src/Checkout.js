import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'


const Checkout = () => {

   

    return (
        <div className="checkout">
            <div className="checkout-container">
                <div className="checkout_left">
                    <div className="checkout_left-ad">
                        <img src="https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg" alt="ad" className="checkout-ad"/>
                    </div>
                    <div className="checkout_left-title">your shopping basket :</div>
                </div>
                <div className="checkout_right"><Subtotal/></div>
            </div>
        </div>
    )
}

export default Checkout
