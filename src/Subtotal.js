import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

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

            <button className="subtotal-button" onClick={e=>history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}
export default Subtotal
