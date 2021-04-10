import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {

    render() {
        return(
            <div className="container login-container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 align-items-center p-5 h-80">
                        <h2>Login</h2>
                        <Form className="my-3">
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Enter Password" />
                            </FormGroup>
                            <Button className="btn btn-outline">Login</Button>
                        </Form>
                        <span>Don't have an account? <a href="/">Create Account</a></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;