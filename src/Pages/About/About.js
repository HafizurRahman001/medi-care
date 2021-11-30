import React from 'react';
import './About.css';
import aboutBanner from '../../Images/missin and vission.png';

const About = () => {
    return (
        <div className="container">
            <div className="about-area">
                <div>
                    <img className="img-fluid mb-5" src={aboutBanner} alt="" />
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-9">
                            <h1>Driven to improve the health of our community</h1>
                            <p className='fs-5 text-muted'>
                                The mission of Country Doctor Community Health Centers is to improve the health of our community by providing high quality, caring, culturally appropriate primary health care that addresses the needs of people, regardless of their ability to pay.
                            </p>

                            <h5 className="mt-5 fw-bold">
                                In order to accomplish this mission in a way that is consistent with the values of the organization, programs and policies must be established that:
                            </h5>
                            <div className="mission-features-section">
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Respect the dignity of patients, board members and staff members;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Are determined and implemented by board and staff members who reflect the communities served;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Allow us to employ highly competent professional staff;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Are responsive to the community;
                                </p>
                                <p><i className="fas text-muted pe-2 fa-edit"></i>Are developed to conform to standards of integrity and justice;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Encourage an atmosphere of openness and honesty;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Establish a compassionate, trustful workplace;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Attract, empower, and retain staff;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Support the education and training of a future community health center work force;</p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Have a positive impact on the community;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Take into consideration non-financial barriers to care;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Promote quality of care and good service;
                                </p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Are established through a deliberative process;</p>
                                <p>
                                    <i className="fas text-muted pe-2 fa-edit"></i>
                                    Exemplify the organization’s commitment to the diverse communities we serve;
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="community-clinic-section">
                                <h6 className="fw-bold"><i className="fas fa-map-marker-alt"></i> Country Doctor Community Clinic</h6>
                                <address className="text-muted">
                                    500 19th Ave. East <br />
                                    Seattle, WA 98112 <br />
                                    (206) 299-1600
                                </address>
                            </div>
                            <div className="family-medical-section">
                                <h6 className="fw-bold"><i className="fas fa-map-marker-alt"></i> Carolyn Downs Family Medical Center</h6>
                                <address className="text-muted">
                                    2101 East Yesler Way <br />
                                    Seattle, WA 98122 <br />
                                    (206) 299-1900
                                </address>
                            </div>
                            <p className='text-muted'>
                                Country Doctor Community Health <br /> Center is an FTCA deemed facility.
                            </p>

                            <div className="popular-pages-section">
                                <h3 className="fw-bold mb-4 mt-4">Popular Pages:</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><a href="/"><i className="fas text-primary fa-check-circle"></i> Patient Portal</a></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/"><i className="fas text-primary fa-check-circle"></i> Donate Online</a></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/"><i className="fas text-primary fa-check-circle"></i> Employment Opportunities</a></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/"><i className="fas text-primary fa-check-circle"></i> Insurance Assistance</a></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/"><i className="fas text-primary fa-check-circle"></i> News and Events</a></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;