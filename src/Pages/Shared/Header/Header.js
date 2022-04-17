import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../../Images/logo.png'
import './Header.css'
const Header = () => {
    // const [user] = useAuthState(auth);

    // const handleSignOut=()=>{
    //     signOut(auth);
    // }
    return (
        <>
            <Navbar className='navbar' sticky='top' collapseOnSelect expand="lg" variant="dark">
                <Container className='navbarText'>
                <Nav.Link href='home#banner'>
                        <img className='rounded-circle ' height={'50px'} src={logo2} alt='' /> 
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbarText">
                            <Nav.Link className='navbarText text-dark fw-bold title-main' href="home#banner">Xplore Wild</Nav.Link>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ?<button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>:
                                <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>}
                        </Nav> */}
                            <Nav.Link className='navbarText text-dark fw-bold' href="home#services">Services</Nav.Link>
                            <Nav.Link className='navbarText text-dark fw-bold' href="home#books">Books</Nav.Link>
                            <Nav.Link className='navbarText text-dark fw-bold' href="">Blogs</Nav.Link>
                            <Nav.Link className='navbarText text-dark fw-bold' href="">About</Nav.Link>
                            <Nav.Link className='navbarText text-dark fw-bold' href="">Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;