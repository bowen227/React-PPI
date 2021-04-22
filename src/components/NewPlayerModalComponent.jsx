import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class NewPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>New Player</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" id="firstName" name="firstName" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" id="lastName" name="lastName" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileImg">Profile Image</Label>
                            <Input type="file" id="profileImg" name="profileImg" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button name="newPlayer" color="dark" onClick={this.props.toggle}>Save</Button>
                    <Button name="newPlayer" color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default NewPlayer;