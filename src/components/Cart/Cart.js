import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
   
    //console.log(cart);
    //const total = cart.reduce((total, prd) => total + prd.price , 0 )
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price*product.quantity;
        
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }

    if (total > 15) {
        shipping = 5.00;
    }
    else if (total > 0) {
        shipping = 12.90
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formateNumber = num => {
        const pricision = num.toFixed(2);
        return Number(pricision);
    }
    return (
        <div>
            <h4 className="text-primary">Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>product price:{formateNumber(total)}</p>

            <p><small>Shipping Cost :{shipping}</small></p>
            <p><small>Tax+VaT:{tax}</small></p>
            <p>Total Price:{grandTotal}</p>
            <br />
            <Link to='/review'>
            <button className='cart-btn'>Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;