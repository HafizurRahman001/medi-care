import React from 'react';
import './Footer.css';
import signature from '../../Images/signature.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section py-4">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-3">
                        <div className="signature">
                            <img src={signature} alt="" />
                        </div>
                        <h4>Dr. Author Miller</h4>
                        <p>MBBs, Ford Medical Collage, Uk</p>
                        <p>FCPS, Residintial College, Thailand</p>
                    </div>
                    <div className="col-md-3 useful-links-section">
                        <h4>UseFul Links:</h4>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/services">Services</Link></p>
                        <p><Link to="/about">About</Link></p>
                        <p><Link to="/contact">Contact</Link></p>
                    </div>
                    <div className="col-md-3">
                        <h4>Get In Touch:</h4>
                        <i className="fab social-icon fa-facebook-square"></i>
                        <i className="fab social-icon fa-linkedin"></i>
                        <i className="fab social-icon fa-twitter-square"></i>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact Us:</h4>
                        <p>2005 Stokes Isle Apt. 896,<br />
                            Venaville 10010, USA <br />
                            info@yourdomain.com <br />
                            (+68) 120034509
                        </p>
                    </div>
                </div>
            </div> <hr />
            <p className='text-center text-dark'>&copy;- All right reserved by medi care team</p>
        </div>
    );
};

export default Footer;