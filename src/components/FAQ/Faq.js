import React from 'react';
import './Faq.css';
import faq from '../../Images/faqs-banner.jpg';
import faq1 from '../../Images/faq/faq-1.png';

const Faq = () => {
    return (
        <div style={{ backgroundColor: '#223645' }}>
            <div className="faq-img mb-5">
                <img className="w-100" src={faq} alt="" />
            </div>
            <div className="frequent-question-section text-center my-5">
                <img className="pb-4" style={{ width: '15%' }} src={faq1} alt="" />
                <h1
                    className='pt-4'
                    style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}
                >Frequent Questions</h1>
                <p
                    style={{ paddingBottom: '55px' }}
                    className='text-muted fs-5'>
                    We offer reasonable pricing health care plans, <br /> insurance packages based on financial conditions of clients.</p>
            </div>
            <div style={{ paddingBottom: '88px' }} className="container">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button style={{ backgroundColor: 'rgb(221 221 221 / 25%)' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h3 className='fw-bold text-muted'> <span className='text-danger me-4'>01</span> How do I get health care when I need it?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs-5 text-muted accordion-heading">
                                You can visit HealSoul Health Services during office hours. Appointments are appreciated, but walk-ins are welcome as well. If possible, please make a call ahead before visiting. This will allow us to arrange services and reduce your waiting time. Hours are Monday through Friday, 9:00 a.m. to 4:30 p.m.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h3 className='fw-bold text-secondary accordion-heading'> <span className='text-danger me-4'>02</span> Is there coverage for the elderly and juveniles?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs-5 text-muted">
                                Upon request, HealSoul Health Services staff will provide instructions for individuals whose medical conditions need special attention and additional certificates. Normally, we provide up-to-80%-off or free health care for these cases with specific diseases and illnesses specified by the law.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button style={{ backgroundColor: 'rgb(221 221 221 / 25%)' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h3 className='fw-bold text-secondary accordion-heading'> <span className='text-danger me-4'>03</span> What if I require lab tests to be performed?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs-5 text-muted">
                                HealSoul Health Services provide patients with choices to ask for the conducting and analyzing of several lab tests on-site at no cost for prioritized patients or at 70% for people with an insurance. Additional testing can be ordered off site; those costs are the responsibility of the enquirers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h3 className='fw-bold text-secondary accordion-heading'> <span className='text-danger me-4'>04</span> Are there Family Planning Services available?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs-5 text-muted">
                                Yes. Reproductive services are always available at HealSoul Health Services. Additionally, we also have an agreement in which all enrolled clients will only have to pay a nominal fee for the first visit for checkups. They will be exempt from this fee from their second visit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button style={{ backgroundColor: 'rgb(221 221 221 / 25%)' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h3 className='fw-bold text-secondary accordion-heading'> <span className='text-danger me-4'>05</span> What is the operation being recommended?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body fs-5 text-muted">
                                Your healthcare provider should clearly explain the surgical procedure, such as the steps involved and provide you with examples. You should ask if there are different methods for doing this operation and why he or she favors one way over another.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;