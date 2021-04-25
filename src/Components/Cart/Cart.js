import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const totalPrice = cart.reduce((sum, topic)=> sum + topic.price, 0);
    // let totalPrice = 0;
    // for (let i=0; i < cart.length; i++){
    //     const top = cart[i];
    //     totalPrice = totalPrice + top.price;
    // }
    const vat = totalPrice*.15;
    const grandTotal = totalPrice + vat;
    

    
    
    
    
    // const total = cart.reduce((total, topic)=>total + topic.price, 0);

    return (
        <div>
            <h1 className="summary">Course Summary </h1>
            <h3>Course Added: {cart.length}</h3>
            <h3>course price $ {totalPrice}</h3>
            <h4>VAT @15%: {vat} </h4>
            <h2 className="grand-total">Grand Total: {grandTotal} </h2>
            <br/>
            <button className="confirm-button">Confirm Order</button>
          
        </div>
    );
};

export default Cart;