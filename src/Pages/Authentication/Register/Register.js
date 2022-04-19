import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialRegister from '../SocialRegister/SocialRegister';
import './Register.css';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleRegister = event => {
        event.preventDefault();
        const name=nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(agree){        
        createUserWithEmailAndPassword(email, password);}

    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if(loading){
        return <Loading></Loading>
      }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container mx-auto mt-5 Register shadow-lg p-3 mb-5 '>
            <h2 className='text-dark text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="User name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <div className='mb-2'>
                    <input onClick={()=>setAgree(!agree)} className='mx-2' type='checkbox' name='terms' id='terms' />
                    <label className={agree ? 'text-primary':'text-danger'} htmlFor='terms'>Accept Xplore Wild Terms & Conditions</label>
                </div>

                <div className='d-flex justify-content-between'>
                    <Button disabled={!agree} className='toggle-btn ' variant="light" type="submit">
                        Submit
                    </Button>
                    <p className='mt-2'>Already have an account?</p>
                    <Button className='toggle-btn2 ' variant="" type="button"><Link className='text-light btn-link' to='/login'>Login</Link>
                    </Button>
                </div>

            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;