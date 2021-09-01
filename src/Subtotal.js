import React, { useState , useEffect } from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {

    const history = useHistory();
    const [{ basket , user }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="subtotal-text">Subtotal ({basket.length} items) : <strong className="m-l"> {value}</strong></p>
                        <small className="subtotal-text-small"><input type="checkbox" name="gift" className="m-r" /> this order contains a gift</small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

           {basket.length!==0 ?(<button className="subtotal-button" onClick={(e)=>{user?history.push('/payment') :history.push('/login')}}>Proceed to checkout</button>) : <p className="subtotal-button-alt">your basket is empty , please add items to proceed to checkout!</p>}
        </div>
    )
}
export default Subtotal
