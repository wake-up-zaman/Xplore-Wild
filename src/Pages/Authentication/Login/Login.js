import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate=useNavigate();
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div className='container w-50 mx-auto mt-5 Login'>
        <h2 className='text-dark text-center'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <div className='d-flex justify-content-between'>
            <Button  className='toggle-btn '  variant="light" type="submit">
                Login
            </Button>
            <p className='mt-2'>New to Xplore Wild?</p>
            <Button  className='toggle-btn2 ' variant="" type="submit"><Link className='text-light btn-link' to='/register'>Sign Up</Link>
            </Button>
            </div>
        </Form>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;