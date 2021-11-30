import React from 'react';
import './LogInForm.css';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogInForm = () => {

    // destructuring necessary function and states
    const { googleSignIn, processSignIn, handlePassword, handleEmail } = useAuth();

    const location = useLocation();
    const redirect_Ui = location.state?.from || "/";
    const history = useHistory();

    // handle automatic google login
    const handleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_Ui)
            }).catch(error => {
                console.log(error);
            })
    };

    // maintain user login
    const handleUserLogin = (e) => {
        e.preventDefault();
        processSignIn()
            .then(result => {
                history.push(redirect_Ui)
            }).catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="login-area">
            <div className="container">
                <div className="mx-auto login-section">
                    <h1 className="text-center mb-5">Please LogIn</h1>
                    <form onSubmit={handleUserLogin}>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput" className="form-label">Your Email:</label>
                            <input onBlur={handleEmail} type="email" className="form-control" required id="formGroupExampleInput" placeholder="Email" />
                        </div>
                        <div className="mb-1">
                            <label onBlur={handlePassword} htmlFor="formGroupExampleInput2" className="form-label">Your Password:</label>
                            <input type="password" className="form-control" required id="formGroupExampleInput2" placeholder="Password" />
                        </div>
                        <button className='btn btn-danger common-btn-style mt-3 w-100'>LogIn</button>
                    </form>
                    <p style={{ marginBottom: '0px', padding: '2px 0px', cursor: 'pointer' }}>
                        <Link to='/register-form'>New user?</Link>
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

export default LogInForm;