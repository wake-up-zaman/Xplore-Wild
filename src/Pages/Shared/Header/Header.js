import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo2 from '../../../Images/logo.png'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <>
            <Navbar className='navbar' sticky='top' collapseOnSelect expand="lg" variant="dark">
                <Container className='navbarText'>
                <Nav.Link href='home#banner'>
                        <img className='rounded-circle ' height={'50px'} src={logo2} alt='' /> 
                    </Nav.Link>
                    <Nav.Link className='navbarText text-dark fw-bold title-main' href="home#banner">Xplore Wild</Nav.Link>
                    <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navbarText">                      
                        </Nav>
                            <Nav.Link className='navbarText text-dark fw-bold' href="home#services">Services</Nav.Link>
                            <Nav.Link className='navbarText text-dark fw-bold' href="home#books">Books</Nav.Link>
                            {/* <Nav.Link className='navbarText text-dark fw-bold' as={Link} to="/checkout">Checkout</Nav.Link> */}
                            <Nav.Link className='navbarText text-dark fw-bold' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='navbarText text-dark fw-bold' as={Link} to="/about">About</Nav.Link>
                            {
                                user ?<button type="button" className='btn btn-link sign-out text-dark text-decoration-none' onClick={handleSignOut}>Sign Out</button>:
                                <Nav.Link className='sign-in' as={Link} to="/login">
                                Login
                            </Nav.Link>}
                            {/* <Nav.Link className='navbarText text-dark fw-bold' as={Link} to="/login">Login</Nav.Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;