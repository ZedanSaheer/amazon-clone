import React from 'react'
import './Product.css'

const Product = ({title,price,image,rating}) => {
    return (
        <div className="product">
            <div className="product_info">
               {title}
            </div>
            <div className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="product_rating">
                {Array(rating).fill().map((_,i)=> (<span className="product_rating-star">⭐</span>))}
            </div>
            <div className="product_image-container">
                <img src={image} alt="product" className="product_image"/>
            </div>
            <div className="product_button">
                <button className="add-to-cart">
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default Product
