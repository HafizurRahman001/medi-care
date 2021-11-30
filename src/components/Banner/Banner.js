import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-section mb-3">
                <div className="banner container">
                    <p className="fw-bold">Hello, I am</p>
                    <h1><span className="text-danger">Dr.</span> Arthur Miller</h1>
                    <p>YOUR PROFESSIONAL PHYSIATRIST
                    </p>
                    <div className="banner-description">
                        <p>I focus on helping the patient become as functional and pain-free as possible in order to enjoy life as fully as possible.
                        </p>
                    </div>
                </div>
            </div>
            <div className="corona-update-section">
                <div className="container">
                    <div className="row corona-update align-items-center">
                        <div className="col-md-6">
                            <h4 className='text-white covid-info-title'>Coronavirus COVID-19 information for patients</h4>
                        </div>
                        <div className="col-md-6 text-end covid-19-btn-section">
                            <Link to={{ pathname: "https://corona.gov.bd/" }} target="_blank">
                                <button className='btn btn-danger'>
                                    Covid-19 Resources
                                    <i className="fas fa-angle-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;