import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class NewEvent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>New Event</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="eventTitle">Title</Label>
                            <Input type="text" id="eventTitle" name="eventTitle" placeholder="Event Title"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="eventDate">Date</Label>
                            <Input type="date" id="eventDate" name="eventDate"></Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={this.props.toggle}>Save</Button>
                    <Button color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default NewEvent;