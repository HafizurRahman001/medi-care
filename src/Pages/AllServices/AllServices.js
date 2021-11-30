import React from 'react';
import './AllServices.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AllServices = () => {
    const { services } = useAuth();
    console.log(services);

    return (
        <div className="container mb-5">
            <h1 className="text-center mt-5 mb-3 fw-bold">All Services</h1>
            <p className='text-center text-muted'>
                We provided the all services below for the patient. <br />
                We believe on our hard working and we provide you the <br />
                experts. (best of luck)
            </p>
            <div className="card-group">
                <div className="row">
                    {services.map(service =>

                        <div key={service.id} className="col-md-4 col-12 g-5">
                            <div className="card all-service-card">
                                <img src={service?.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center all-service-title">{service?.title}</h5>
                                    <p className="card-text">{service?.desc?.slice(0, 150)}</p>
                                </div>
                                <div className="row px-3">
                                    <h5 className='text-center py-3'>
                                        Dr. {service?.doctor}
                                    </h5>
                                    <div className="col-md-7 col-6">
                                        <p><i className="fas text-muted fa-lock-open"></i> Open: {service?.open}</p>
                                        <p><i className="far text-muted fa-calendar-alt"></i> Day: {service?.day}</p>
                                    </div>
                                    <div className="col-md-5 col-6">
                                        <p><i className="fas text-muted fa-lock"></i> Close: {service?.close}</p>
                                        <p><i className="fas text-muted fa-star"></i> Rating: {service?.rating}</p>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <Link to={`/details/${service?.id}`}>
                                        <button style={{ backgroundColor: 'rgb(0 0 139 / 62%)', color: 'white' }} className="btn get-more-btn w-100">Get Details <i className="fas fa-angle-right"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllServices;