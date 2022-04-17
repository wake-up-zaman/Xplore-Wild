import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import SocialRegister from '../SocialRegister/SocialRegister';
import './Register.css'
const Register = () => {
    return (
        <div className='container w-50 mx-auto mt-5 Register '>
        <h2 className='text-dark text-center'>Please Register</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="User name" required />
            </Form.Group>
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