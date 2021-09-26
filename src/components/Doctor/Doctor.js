import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Doctor.css'

const Doctor = (props) => {
    console.log(props)
    const {id,name,Designation,img,age,salary} = props.doctor;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
       <div className="main-container">
            <div className="doctor">
                <img src={img} alt="" />
                <h2>Name : {name}</h2>
                <h4>Designation : {Designation}</h4>
                <p>Age : {age}</p>
                <p>Salary : ${salary}</p>
                <button
                onClick={() => props.handleAddToCart(props.doctor)} 
                className="add-to-cart"
                >{element}Add to Cart</button>
            </div>
       </div>
       </>
    );
};

export default Doctor;