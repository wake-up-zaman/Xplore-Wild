import React from 'react';
import './Footer.css'
const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <section className='footer mt-5'>
            <div className='social'>
                <a href='#'><i class='fab fa-facebook-f'></i></a>
                <a href='#'><i class='fab fa-twitter'></i></a>
                <a href='#'><i class='fab fa-instagram'></i></a>
                <a href='#'><i class='fab fa-linkedin-in'></i></a>
            </div>
            <ul className='list'>
            <li>
                    <a href='#'>FAQ</a>
                </li>
            <li>
                    <a href='#'>Terms and Conditions</a>
                </li>
                <li>
                    <a href='#'>Privacy Policy</a>
                </li>

                <li>
                    <a href='#'>Get Help</a>
                </li>
            </ul>
            <p className='text-center mt-4 copy-right mb-0'><small>Copyright &copy; {year}. All right reserved.</small></p>
        </section>
    );
};

export default Footer;