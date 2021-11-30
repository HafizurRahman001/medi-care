import axios from 'axios';
import React, { useRef } from 'react';

const AddService = () => {

    const titleRef = useRef();
    const doctorNameRef = useRef();
    const doctorImageRef = useRef();
    const chamberOpenRef = useRef();
    const chamberCloseRef = useRef();
    const dayRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();
    const diseaseImgRef = useRef();

    const handleAddService = e => {
        e.preventDefault();

        const title = titleRef.current.value;
        const doctor = doctorNameRef.current.value;
        const doctorImg = doctorImageRef.current.value;
        const open = chamberOpenRef.current.value;
        const close = chamberCloseRef.current.value;
        const day = dayRef.current.value;
        const rating = ratingRef.current.value;
        const desc = descriptionRef.current.value;
        const img = diseaseImgRef.current.value;

        const addService = { title, doctor, doctorImg, open, close, day, rating, desc, img };

        axios.post('https://boiling-caverns-62787.herokuapp.com/services', addService)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert('successfully added services');
                    e.target.reset();
                }
            })
    }





    return (
        <div className='register-area'>
            <div className="container">
                <div className="mx-auto register-section">
                    <h1 className='text-center mb-5'>Add your service</h1>
                    <form onSubmit={handleAddService}>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Title:</label>
                            <input ref={titleRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: Cancer" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Doctor Name:</label>
                            <input ref={doctorNameRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: Robert" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Doctor image link</label>
                            <input ref={doctorImageRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: https://something.jpg/png" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Chamber open at:</label>
                            <input ref={chamberOpenRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: 8.00 AM" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Chamber close at:</label>
                            <input ref={chamberCloseRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: 9.00 AM" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Open day:</label>
                            <input ref={dayRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: Mon - Fri" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Rating:</label>
                            <input ref={ratingRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: 4.5" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Description about disease:</label>
                            <input ref={descriptionRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: cancer is very dangerous....." />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Disease image link:</label>
                            <input ref={diseaseImgRef} type="text" className="form-control" required id="formGroupExampleInput" placeholder="e.g: https://some.jpg/png" />
                        </div>

                        <button className='btn btn-danger common-btn-style mt-3 w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;