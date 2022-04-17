import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialRegister from '../SocialRegister/SocialRegister';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef=useRef('')
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleRegister=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);

    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate=useNavigate();
    if(user){
        navigate(from, { replace: true });
    }



    return (
        <div className='container w-50 mx-auto mt-5 Register '>
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
            <div className='d-flex justify-content-between'>
            <Button  className='toggle-btn '  variant="light" type="submit">
                Submit
            </Button>
            <p className='mt-2'>Already have an account?</p>
            <Button  className='toggle-btn2 ' variant="" type="submit"><Link className='text-light btn-link' to='/login'>Login</Link>
            </Button>
            </div>

        </Form>
        <SocialRegister></SocialRegister>
        </div>
    );
};

export default Register;