import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let name = '';
    for(const doctor of cart){
        total = total + doctor.salary;
        name = name + doctor.name;
    }

    return (
        <div className="container cart">
            <h3>Doctor Added : {props.cart.length }</h3>
            <h4>Name : {name}</h4>
            <h5>Total Cost : $ {total}</h5>
        </div>
    );
};

export default Cart;