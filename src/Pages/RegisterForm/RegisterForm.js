import React from 'react';
import './RegisterForm.css';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RegisterForm = () => {

    // destructuring necessary function and states
    const { handleName, handlePassword, setUser, googleSignIn, setIsLoading, handleEmail, processRegister, error } = useAuth();

    const location = useLocation();
    const redirect_Ui = location.state?.from || "/";
    const history = useHistory();

    // handle automatic google login
    const handleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_Ui)
            }).catch((error) => {
                console.log(error);
                setIsLoading(false)
            })
    };

    // handle register form
    const handleRegisterForm = e => {
        e.preventDefault();
        processRegister();
        setUser({});
    };

    return (
        <div className='register-area'>
            <div className="container">
                <div className="mx-auto register-section">
                    <h1 className='text-center mb-5'>Please Register</h1>
                    <form onSubmit={handleRegisterForm}>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Your Name:</label>
                            <input onBlur={handleName} type="text" className="form-control" required id="formGroupExampleInput" placeholder="Name" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Your Email:</label>
                            <input onBlur={handleEmail} type="email" className="form-control" required id="formGroupExampleInput2" placeholder="Email" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput3" className="form-label">Your Password:</label>
                            <input onBlur={handlePassword} type="password" required className="form-control" id="formGroupExampleInput3" placeholder="Password" />
                            <p className="text-warning mb-0 pt-1">{error}</p>
                        </div>
                        <button className='btn btn-danger common-btn-style mt-3 w-100'>Register</button>
                    </form>
                    <p style={{ marginBottom: '0px', padding: '2px 0px', cursor: 'pointer' }}>
                        <Link to='/login-form'>Already have an account?</Link>
                    </p>
                    <div className="automatic-signin text-center">
                        <i onClick={handleLogIn} className="fab automatic-signin-logo fa-google-plus-square"></i>
                        <i className="fab automatic-signin-logo fa-facebook-square"></i>
                        <i className="fab automatic-signin-logo fa-github-square"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;