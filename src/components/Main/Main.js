import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../AuthProvider/AuthProvider';
import About from '../../Pages/About/About';
import AllServices from '../../Pages/AllServices/AllServices';
import Contact from '../../Pages/Contact/Contact';
import Register from '../../Pages/Register/Register';
import LogInForm from '../../Pages/LogInForm/LogInForm';
import NotFound from '../../Pages/NotFound/NotFound';
import RegisterForm from '../../Pages/RegisterForm/RegisterForm';
import Details from '../Details/Details';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddService from '../../Pages/AddService/AddService';

const Main = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <PrivateRoute path='/services'>
                            <AllServices></AllServices>
                        </PrivateRoute>
                        <PrivateRoute path='/details/:serviceId'>
                            <Details></Details>
                        </PrivateRoute>
                        <PrivateRoute path='/contact'>
                            <Contact></Contact>
                        </PrivateRoute>
                        <Route path='/about'>
                            <About></About>
                        </Route>
                        <Route path='/frequently-asked-question'>
                            <Faq></Faq>
                        </Route>
                        <Route path='/register'>
                            <Register></Register>
                        </Route>
                        <Route path='/login-form'>
                            <LogInForm></LogInForm>
                        </Route>
                        <Route path='/register-form'>
                            <RegisterForm></RegisterForm>
                        </Route>
                        <Route path='/add-service'>
                            <AddService></AddService>
                        </Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default Main;