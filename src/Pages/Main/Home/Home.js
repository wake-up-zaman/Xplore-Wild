import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Books from '../Books/Books';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Books></Books>
            <Footer></Footer>
        </div>
    );
};

export default Home;