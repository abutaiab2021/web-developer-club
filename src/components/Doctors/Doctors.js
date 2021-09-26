import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
    <div className="container doctors-container">
        {
            doctors.map(doctor=><Doctor doctor={doctor}></Doctor>)
        }
    </div>
    );
};

export default Doctors;