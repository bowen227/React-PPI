import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCoach } from '../redux/ActionCreators';

const mapDispatchToProps = {
    addCoach: (firstName, lastName, head) => (addCoach(firstName, lastName, head))
}

class NewCoach extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            head: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.addCoach = this.addCoach.bind(this)
    }

    addCoach(event) {
        event.preventDefault()
        this.props.toggle(event)

        this.props.addCoach(this.state.firstName, this.state.lastName, this.state.head)
        this.setState({ firstName: '' })
        this.setState({ lastName: '' })
        this.setState({ head: false })
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        if (name === "head" && value === "false") {
            this.setState({ head: false })
            return
        }
        if (name === "head" && value === "true") {
            this.setState({ head: true })
            return
        }
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>New Coach</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="head">Head</Label>
                            <Input type="select" name="head" value={this.state.head} onChange={this.handleChange}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button name="cModal" color="dark" onClick={this.addCoach}>Save</Button>
                    <Button name="cModal" color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NewCoach));