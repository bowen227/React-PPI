import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

function LoginForm(props) {
    return (
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
                        <FormGroup>
                            <Label for="accountType">Account Type</Label>
                            <Input type="select" name="accountType" id="accountType">
                                <option value="association">Association</option>
                                <option value="coach">Coach</option>
                            </Input>
                        </FormGroup>
                        <Button className="btn btn-outline" onClick={props.login}>Login</Button>
                    </Form>
                    <span>Don't have an account? <Link to="/signup">Create Account</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;