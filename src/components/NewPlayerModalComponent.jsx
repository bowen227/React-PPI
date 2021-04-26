import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class NewPlayer extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD

        this.state = {
            firstName: '',
            lastName: '',
            throws: 'right',
            bats: 'right',
            group: '6U',
        }

        this.handleChange = this.handleChange.bind(this)
        this.newPlayer = this.newPlayer.bind(this)
    }

    newPlayer(event) {
        event.preventDefault()
        this.props.toggle(event)

        this.props.addPlayer(this.state.firstName, this.state.lastName, this.state.throws, this.state.bats, this.state.group)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({ [name]: value })
=======
        this.state = {
            firstName: '',
            lastName: '',
            birthDate: '',
            group: '6U',
            throws: 'Right',
            bats: 'Right',
            profileImg: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        this.setState({ [target.name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            group: this.state.group,
            throws: this.state.throws,
            bats: this.state.bats
        }
        console.log(payload)
        this.props.addNewPlayer(payload)
        // Close modal on success otherwise display errors
>>>>>>> 7b10857d2094edf05298a88ea581636fa757dc50
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>New Player</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
<<<<<<< HEAD
                            <Input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="throws">Throws</Label>
                            <Input type="select" name="throws" value={this.state.throws} onChange={this.handleChange}>
                                <option value="right">Right</option>
                                <option value="left">Left</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="bats">Bats</Label>
                            <Input type="select" name="bats" value={this.state.bats} onChange={this.handleChange}>
                                <option value="right">Right</option>
                                <option value="left">Left</option>
                                <option value="switch">Switch</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="group">Group</Label>
                            <Input type="select" name="group" value={this.state.group} onChange={this.handleChange}>
=======
                            <Input 
                                type="text" 
                                id="firstName" 
                                name="firstName"
                                onChange={this.handleInputChange}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                onChange={this.handleInputChange}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for="birthDate">Date of Birth</Label>
                            <Input 
                                type="date" 
                                id="birthDate" 
                                name="birthDate" 
                                onChange={this.handleInputChange}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for="group">Group</Label>
                            <Input 
                                type="select" 
                                id="group" 
                                name="group"
                                onChange={this.handleInputChange}
                                >
>>>>>>> 7b10857d2094edf05298a88ea581636fa757dc50
                                <option value="6U">6U</option>
                                <option value="8U">8U</option>
                                <option value="10U">10U</option>
                                <option value="12U">12U</option>
                            </Input>
<<<<<<< HEAD
=======
                        </FormGroup>
                        <FormGroup>
                            <Label for="throws">Throws</Label>
                            <Input 
                                type="select" 
                                id="throws" 
                                name="throws"
                                onChange={this.handleInputChange}
                                >
                                <option value="right">Right</option>
                                <option value="left">Left</option>
                            </Input>
>>>>>>> 7b10857d2094edf05298a88ea581636fa757dc50
                        </FormGroup>
                        <FormGroup>
                            <Label for="bats">Bats</Label>
                            <Input 
                                type="select" 
                                id="bats" 
                                name="bats"
                                onChange={this.handleInputChange}
                                >
                                <option value="right">Right</option>
                                <option value="left">Left</option>
                                <option value="switch">Switch</option>
                            </Input>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="profileImg">Profile Image</Label>
                            <Input type="file" id="profileImg" name="profileImg" />
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
<<<<<<< HEAD
                    <Button name="pModal" color="dark" onClick={this.newPlayer}>Save</Button>
=======
                    <Button name="pModal" color="dark" onClick={this.handleSubmit}>Save</Button>
>>>>>>> 7b10857d2094edf05298a88ea581636fa757dc50
                    <Button name="pModal" color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewPlayer: (payload) => {
            dispatch({ type: "ADDED_PLAYER", payload: payload })
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NewPlayer));
