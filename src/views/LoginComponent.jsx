import { Redirect } from 'react-router';
import LoginForm from '../components/LoginFormComponent';

function Login(props) {
    if (props.isLoggedIn) {
        return <Redirect to="/dashboard" />
    }
    return <LoginForm login={props.login} />
}

export default Login;