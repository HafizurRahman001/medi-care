import React from 'react';
import './Details.css';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Details = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();

    const searchMatch = services.filter(pd => pd.id === parseInt(serviceId));
    return (
        <div className='container mt-5'>
            <div style={{ backgroundColor: '#223645', color: 'white' }} className="row p-3">
                <div className="col-md-5">
                    <div className="details-img">
                        <img className='img-fluid' src={searchMatch[0]?.img} alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <h1 className='details-heading'>{searchMatch[0]?.title}</h1>
                    <p style={{ color: '#a2a2a2', paddingTop: '10px', textAlign: 'justify' }}>{searchMatch[0]?.desc}</p>

                </div>
            </div>
            <div style={{ backgroundColor: '#223645', color: 'white' }} className="row border my-4">
                <div className="col-md-6">
                    <h4 className='text-center py-4'>Chember Information:</h4>
                    <div className="row px-3 text-center">
                        <div className="col-md-6 col-6">
                            <p><i className="fas text-white pe-2 fa-lock-open"></i> Open: {searchMatch[0]?.open}</p>
                            <p><i className="far text-white pe-2 fa-calendar-alt"></i> Day: {searchMatch[0]?.day}</p>
                        </div>
                        <div className="col-md-6 col-6 pb-4">
                            <p><i className="fas text-white pe-2 fa-lock"></i> Close: {searchMatch[0]?.close}</p>
                            <p><i className="fas text-white pe-2 fa-star"></i> Rating: {searchMatch[0]?.rating}</p>
                        </div>
                        <p><i className="fas text-center pe-2 fa-clipboard-check"></i> For Booking Call: (+660) 1485365</p>
                        <p><i className="far text-white pe-2 fa-envelope"></i> Email: medicare.international@gmail.com</p>
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid #ddd' }} className="col-md-6">
                    <h4 className='text-center mx-auto  pb-1 pt-4'>Doctor's Information:</h4>
                    <div className="text-center mx-auto">
                        <div className='doctor-img mx-auto'>
                            <img
                                style={{ border: '1px solid white', borderRadius: '50%' }}
                                className='img-fluid' src={searchMatch[0]?.doctorImg} alt="" />
                        </div>
                        <div className="text-center">
                            <h4>Dr. {searchMatch[0]?.doctor}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
