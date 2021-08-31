import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating , hideButton}) => {

    const [{basket} , dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

    return (
        <div className="checkoutProduct" key={id}>
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
                   {hideButton && (<button className="checkoutProduct_button" onClick={removeFromBasket}>Remove from basket</button>)}
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
