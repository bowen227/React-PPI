import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EvalModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Evaluate Player</ModalHeader>
                <ModalBody>
                    sliders go here
                    coach comment goes here
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={this.props.toggle}>Save</Button>
                    <Button color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default EvalModal;