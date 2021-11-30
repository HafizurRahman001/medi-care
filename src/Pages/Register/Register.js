import './Register.css';
import LogInForm from '../LogInForm/LogInForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { user } = useAuth();
    return (
        <div className="register-area">
            <div className="container my-5">
                {user?.email ? <LogInForm></LogInForm> : <RegisterForm></RegisterForm>}
            </div>
        </div>
    );
};

export default Register;

