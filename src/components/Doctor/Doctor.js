import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    console.log(props.doctor)
    const {id,name,Designation,img,age,salary} = props.doctor
    return (
        <div className="doctor">

            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <h4>Designation : {Designation}</h4>
            <p>Age : {age}</p>
            <p>Salary : ${salary}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Doctor;