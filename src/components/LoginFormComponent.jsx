import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

function LoginForm(props) {
    const [name, setName] = useState('')
    const [type, setType] = useState('association')

    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value

        if (name === 'email') {
            setName(value)
        } else {
            setType(value)
        }
    }

    const handleLogin = () => {
        const u = {
            name: name,
            type: type
        }
        localStorage.setItem("user", JSON.stringify(u))
        props.login()
    }
    return (
        <div className="container login-container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6 align-items-center p-5 h-80">
                    <h2>Login</h2>
                    <Form className="my-3">
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter Password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="accountType">Account Type</Label>
                            <Input type="select" name="accountType" id="accountType" onChange={handleChange}>
                                <option value="association">Association</option>
                                <option value="coach">Coach</option>
                            </Input>
                        </FormGroup>
                        <Button className="btn btn-outline" onClick={handleLogin}>Login</Button>
                    </Form>
                    <span>Don't have an account? <Link to="/signup">Create Account</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;