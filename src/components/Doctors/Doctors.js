import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])

    const handleAddToCart = (doctor) =>{
        const newCart = [...cart,doctor];
        setCart(newCart);
    }
    return (
    <div className=" main">   
        <div className=" doctors-container">
        {
            doctors.map(doctor=><Doctor
                key={doctor.id} 
                doctor={doctor}
                handleAddToCart={handleAddToCart}
                ></Doctor>)
        }
        </div>
        <div className="cart">
            <Cart cart={cart}></Cart>
        </div>
        
    </div>
    );
};

export default Doctors;