import { Component } from 'react';
import SignupForm from '../components/SignupFormComponent';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SignupForm />
        )
    }
}

export default Signup;