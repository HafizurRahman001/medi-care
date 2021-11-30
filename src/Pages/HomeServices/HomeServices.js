import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Service from '../Service/Service';
import './HomeServices.css'

const HomeServices = () => {
    const { services } = useAuth();
    return (
        <div className='container my-5'>
            <div className="service-section">
                <h1 className='fw-bold'>Our Desire Services</h1>
                <p className='mb-5 text-muted'>We are dedicated enough for Servicing Patient</p>
            </div>
            <div className="row g-4">
                {
                    services.slice(0, 6).map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;