import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container w-50 mx-auto mt-5'>
        <h2 className='text-dark text-center'>Please Login</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        <div className='d-flex justify-content-between'>
        <p className='mt-4'>New to Xplore Wild?</p>
        <Link to='/register' className='text-danger  text-decoration-none'><button className='bg-info border-0 rounded h-75 text-dark'> Sign Up</button></Link>
        </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;