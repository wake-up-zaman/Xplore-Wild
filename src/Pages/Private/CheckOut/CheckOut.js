import React from 'react';
import { useParams } from 'react-router-dom';
import a from '../../../Images/Extra/a.jpg'
import b from '../../../Images/Extra/b.jpg'
import c from '../../../Images/Extra/c.jpg'
import d from '../../../Images/Extra/d.jpg'
import e from '../../../Images/Extra/e.jpg'
import f from '../../../Images/Extra/f.jpg'
import './CheckOut.css'
const CheckOut = () => {
    return (
        <div>
            <div><h2 className='text-center mt-100'>Best Wild Images</h2></div>
            <div className=' container checkout-container'>
            <img className='check-img' src={a} alt=''></img>
            <img className='check-img' src={d} alt=''></img>
            <img className='check-img' src={e} alt=''></img>
            <img className='check-img' src={f} alt=''></img>
            <img className='check-img' src={b} alt=''></img>
            <img className='check-img' src={c} alt=''></img>
            </div>
        </div>
    );
};

export default CheckOut;