import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services'>
            <h2 className='text-center mt-5 '>What I Provide</h2>
            <div className='d-flex align-items-center justify-content-center mb-4'>
                <div style={{ height: '1.5px' }} className='bg-secondary w-25 text-center '></div>
                <p className='mt-2 px-2'></p>
                <div style={{ height: '1.5px' }} className='bg-secondary w-25 text-center '></div>
            </div>
            <h3 className='text-center mb-4'>WildLife Albums</h3>
            <div id='services' className='container'>
                <div className='row'>
                    <div className='services-container'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;