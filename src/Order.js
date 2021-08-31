import React from 'react'
import './Order.css'
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

const Order = ({ order }) => {
    return (
        <div className="order-container">
            <p className="order-date">{moment.unix(order.data.created).format('MMMM Do YYYY , h:mma')}</p>
            <p className="order-id"><small>{order.id}</small></p>
            <div className="order-checkout">
                {order.data.basket?.map(item => {
                    return <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hidebutton
                    />
                })}
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <h3 className="order_total"> Order Total : {value} </h3>
                        </>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
            </div>
        </div>
    )
}

export default Order
