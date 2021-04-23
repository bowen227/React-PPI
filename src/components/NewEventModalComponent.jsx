import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class NewEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventTitle: '',
            eventDate: ''
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
            id: this.props.id,
            title: this.state.eventTitle,
            location: "Soddy Daisy",
            time: "7pm",
            // date: this.state.eventDate
        }

        this.props.addNewEvent(payload)
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>New Event</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="eventTitle">Title</Label>
                            <Input
                                type="text"
                                id="eventTitle"
                                name="eventTitle"
                                placeholder="Event Title"
                                onChange={this.handleInputChange}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="eventDate">Date</Label>
                            <Input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                onChange={this.handleInputChange}>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button name="eModal" color="dark" onClick={this.handleSubmit}>Save</Button>
                    <Button name="eModal" color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventTitle: state.eventTitle,
        eventDate: state.eventDate
    }
}

const mapDispatchToProps = dispatch => {
    // const p = {
    //     eventTitle: this.state.eventTitle,
    //     eventDate: this.state.eventDate
    // }
    return {
        addNewEvent: (payload) => {
            dispatch({ type: "ADDED_NEW_EVENT", payload: payload })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewEvent));
