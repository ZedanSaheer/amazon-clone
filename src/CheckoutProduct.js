import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_logo">
                <img src={image} alt="logo" className="checkoutProduct_logo-img" />
            </div>
            <div className="checkoutProduct_content">
                <div className="checkoutProduct_content-title">
                    {title}
                </div>
                <div className="checkoutProduct_content-stars">{Array(rating).fill().map((_, i) => (<span className="product_rating-star" key={i}>⭐</span>))}</div>
                <div className="checkoutProduct_content-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct_content-button">
                    <button className="checkoutProduct_button">Remove from basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
