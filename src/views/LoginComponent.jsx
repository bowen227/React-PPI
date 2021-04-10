import { Component } from 'react';
import LoginForm from '../components/LoginFormComponent';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <LoginForm login={this.props.login} />
            </>
        )
    }
}

export default Login;