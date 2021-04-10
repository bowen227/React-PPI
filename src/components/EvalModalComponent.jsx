import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EvalModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: true
        }
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.state.evalModal}>
                <ModalHeader toggle={this.toggle}>Evaluate Player</ModalHeader>
                <ModalBody>
                    sliders go here
                    coach comment goes here
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={this.toggle}>Save</Button>
                    <Button color="warning" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default EvalModal;