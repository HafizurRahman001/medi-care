import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    // use for smooth scrool after reloading home page 
    window.onload = function () { document.body.scrollTop = document.documentElement.scrollTop = 0; };

    return (
        <div className="col-md-12">
            <div className="row service-details border">
                <div className="col-md-4 mt-0 ps-0">
                    <div className="service-img">
                        <img className="img-fluid" src={props?.service?.img} alt="" />
                    </div>
                </div>
                <div className="col-md-8 mt-1 p-2">
                    <h2 className="text-center mb-5 mt-0 service-title">{props?.service?.title}</h2>
                    <div className="row">
                        <div className="col-md-6 left-details-section">
                            <h4
                                style={{ color: '#645a5a' }}
                                className='text-center fw-bold mb-4'>
                                Dr. {props?.service?.doctor}
                            </h4>
                            <div className="row ps-3">
                                <div className="col-md-6 col-6">
                                    <p><i className="fas text-muted fa-lock-open"></i> Open: {props?.service?.open}</p>
                                    <p><i className="far text-muted fa-calendar-alt"></i> Day: {props?.service?.day}</p>
                                </div>
                                <div className="col-md-6 col-6 ps-5">
                                    <p><i className="fas text-muted fa-lock"></i> Close: {props?.service?.close}</p>
                                    <p><i className="fas text-muted fa-star"></i> Rating: {props?.service?.rating}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ps-4">
                            <p>{props?.service?.desc.slice(0, 150)}</p>
                            <div className="more-details-btn">
                                <Link to={`/details/${props?.service?.id}`}>
                                    <button style={{ backgroundColor: 'rgb(0 0 139 / 62%)', color: 'white' }} className="btn get-more-btn">More Details
                                        <i className="fas ps-1 fa-angle-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Service;