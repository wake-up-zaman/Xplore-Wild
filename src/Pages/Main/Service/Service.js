import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name,img,description,price}=service;
    const navigate=useNavigate();
    const navigateToCheckOut= id=>{
        navigate(`/checkout`)
    }
    return (
        <div className='service'>
            <img className='w-100 service-img' src={img} alt='' />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p ><small>{description}</small></p>
            <button onClick={navigateToCheckOut} className='btn btn-info text-light'>More Photos</button>
        </div>
    );
};

export default Service;