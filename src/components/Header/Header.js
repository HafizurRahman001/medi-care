import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, NavDropdown } from 'react-bootstrap';

const Header = () => {

    // destructuring necessarry function and states
    const { user, logOut } = useAuth();

    const activeStyle = {
        borderBottom: '2px solid yellow'
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid container py-4">
                <Link to='/home'>
                    <img className='logo' src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/services'>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/contact'>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/frequently-asked-question'>FAQ</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex flex-fill">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-success text-white" type="submit">Search</button>
                    </form>
                    <div className="login">
                        {!user?.email ? <Link to='/register'>LogIn/Register</Link> : <Link to='/register' onClick={logOut} >LogOut</Link>}

                        {user?.email ? <Dropdown className='dropdown-profile'>
                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                <img className="profileImg" src={user?.photoURL ? user?.photoURL : ''} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> : ''}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;