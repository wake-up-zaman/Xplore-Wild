import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/bannerf1.jpg'
import banner2 from '../../../Images/Banner/bannerf2.jpg'
import banner3 from '../../../Images/Banner/bannerf3.jpg'
import bannersp from '../../../Images/Banner/bannersp.jpg';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div id='banner'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannersp}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='carousel-title'>Hi I am Zaman</h2>
                        <h3 className='carousel-title'>Explore the wild life with me !</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className='carousel-title'>Kangaroo</h2>
                        <h3 className='carousel-title'>
                        Northern Territory,Australia
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className='banner-title-le carousel-title'>African Leopard</h2>
                        <h3 className='banner-title-le carousel-title'>Queen Elizabeth National Park,Uganda</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;