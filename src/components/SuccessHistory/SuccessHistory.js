import React from 'react';
import successCase from '../../Images/Logoimg/case.png';
import happyClient from '../../Images/Logoimg/happy.png';
import publishedBooks from '../../Images/Logoimg/book.png';

const SuccessHistory = () => {

    return (
        <div className='mb-5' style={{ backgroundColor: '#223645' }}>
            <div className="container">
                <div style={{ padding: '55px 0px' }} className="row">
                    <div className="col-md-4 col-4 text-center">
                        <div className="logo-img">
                            <img syle={{ backgroundColor: 'red' }} src={successCase} alt="" />
                        </div>
                        <h1 className='pt-4 fw-bold' style={{ color: '#E6CAAF', fontSize: '50px' }}>195</h1>
                        <p style={{ color: '#E6CAAF', fontSize: '20px' }}>Successfull Cases</p>
                    </div>
                    <div className="col-md-4 col-4 text-center">
                        <div className="logo-img">
                            <img src={happyClient} alt="" />
                        </div>
                        <h1 className='pt-4 fw-bold' style={{ color: '#E6CAAF', fontSize: '50px' }}>1790</h1>
                        <p style={{ color: '#E6CAAF', fontSize: '20px' }}>Happy Clients</p>
                    </div >
                    <div className="col-md-4 col-4 text-center">
                        <div className="logo-img">
                            <img src={publishedBooks} alt="" />
                        </div>
                        <h1 className='pt-4 fw-bold' style={{ color: '#E6CAAF', fontSize: '50px' }}>10</h1>
                        <p style={{ color: '#E6CAAF', fontSize: '20px' }}>Published Books</p>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default SuccessHistory;