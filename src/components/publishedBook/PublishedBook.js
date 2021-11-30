import React from 'react';
import publishedBook from '../../Images/AuthorPublication/publishedBook.png'
import quote from '../../Images/AuthorPublication/quote.png';

const PublishedBook = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-6 px-2">
                    <div className="published-book">
                        <img className='img-fluid' src={publishedBook} alt="" />
                    </div>
                </div>
                <div className="col-md-6 px-2">
                    <h1
                        className='my-5'
                        style={{ fontSize: '36px', fontWeight: 'bold' }}>
                        Healsoul - Physical therapy <br /> written by Dr. Arthur Miller
                    </h1>
                    <p
                        className='mb-4'
                        style={{ fontSize: '22px' }}>
                        The book takes a problem-solving approach to the therapeutic management of movement limitations, and quality of life.
                    </p>
                    <div className="quote">
                        <img className="img-fluid" src={quote} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishedBook;