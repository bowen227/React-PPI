import { Component } from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../components/LoginFormComponent';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to="/dashboard" />
        }
        return (
            <LoginForm login={this.props.login} />
        )
    }
}

export default Login;