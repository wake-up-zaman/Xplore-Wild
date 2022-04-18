import React from 'react';
import google from '../../../Images/Social/google.png';
import github from '../../../Images/Social/github.png';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialRegister = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error2) {
       
       errorElement=<p className='text-danger'>Error: {error?.message} {error2?.message}</p>

    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate();

    if(user || user2){
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className=''>
            <p className='text-center'>{errorElement}</p>
                <button onClick={()=> signInWithGoogle()} className='btn btn-light w-50 p-2 d-block mx-auto my-3 '>
                    <img style={{width:'30px'}} src={google} alt=''/>
                    <span className='mx-3'>Google Sign In</span>
                </button>
                <button onClick={()=>signInWithGithub()} className='btn btn-light w-50 p-2 d-block mx-auto my-3 '>
                    <img style={{width:'30px'}} src={github} alt=''/>
                    <span className='mx-3'>Facebook Sign In</span>
                </button>
                </div>
        </div>   
    );
};

export default SocialRegister;