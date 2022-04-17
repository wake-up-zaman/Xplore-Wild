import React from 'react';
import google from '../../../Images/Social/google.png';
import facebook from '../../../Images/Social/facebook.png'
const SocialRegister = () => {
    return (
        <div>
            <div className=''>
                <button className='btn btn-light w-50 p-2 d-block mx-auto my-3 '>
                    <img style={{width:'30px'}} src={google} alt=''/>
                    <span className='mx-3'>Google Sign In</span>
                </button>
                <button className='btn btn-light w-50 p-2 d-block mx-auto my-3 '>
                    <img style={{width:'30px'}} src={facebook} alt=''/>
                    <span className='mx-3'>Facebook Sign In</span>
                </button>
                </div>
        </div>   
    );
};

export default SocialRegister;