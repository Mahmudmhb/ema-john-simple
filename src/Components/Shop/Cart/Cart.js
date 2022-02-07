import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;
  
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;

        // console.log(total)
        }
    const sum = total + shipping;
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Orederd Item:{props.cart.length}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>shipping: ${shipping}</h4>
            <h3>Orderd Total: ${sum}</h3>
            <button className='btn-orderd'>Review Your Order</button>
        </div>
    );
};

export default Cart;