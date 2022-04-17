import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    return (
        <div className='container w-50 mx-auto mt-5 Login'>
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