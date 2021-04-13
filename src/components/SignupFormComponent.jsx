import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

function SignupForm() {
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
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                        </FormGroup>
                        <Button className="btn btn-outline">Sign Up</Button>
                    </Form>
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;