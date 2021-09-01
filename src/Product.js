import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({id,title,price,image,rating,popUp}) => {

    const [{basket},dispatch] = useStateValue();

    const addToBasket = () =>{
        popUp("Added :" , title);
        dispatch({
            type : 'ADD_TO_BASKET',
            item: {
                    id:id,
                    title : title,
                    image : image,
                    price : price ,
                    rating : rating ,
            }
        })
    }

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
                {Array(rating).fill().map((_,i)=> (<span className="product_rating-star" key={i}>⭐</span>))}
            </div>
            <div className="product_image-container">
                <img src={image} alt="product" className="product_image"/>
            </div>
            <div className="product_button">
                <button className="add-to-cart" onClick={addToBasket}>
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default Product
