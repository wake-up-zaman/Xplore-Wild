import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name,img,description,price,id}=service;
    const navigate=useNavigate();
    const navigateToCheckOut= id=>{
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100 service-img' src={img} alt='' />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p ><small>{description}</small></p>
            <button onClick={()=>navigateToCheckOut(id)} className='btn btn-info text-light'>Buy Now</button>
        </div>
    );
};

export default Service;