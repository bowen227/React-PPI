import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class EvalModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inMechanics: 0,
            inGroudballs: 0,
        }
    }

    handleChange(event) {
        this.setState({ inMechanics: event.target.value });
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Evaluate Player</ModalHeader>
                <ModalBody>
                    <h3>Infield</h3>
                    <FormGroup>
                        <Label for="inMechanics">Mechanics {this.state.inMechanics}</Label>
                        <Input type="range" name="inMechanics" id="inMechanics" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inGroundballs">Groundballs</Label>
                        <Input type="range" name="inGroundballs" id="inGroundballs" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inRange">Range</Label>
                        <Input type="range" name="inRange" id="inRange" min="0" max="5" step=".1" />
                    </FormGroup>
                    <h3>OutField</h3>
                    <FormGroup>
                        <Label for="outMechnics">Mechanics</Label>
                        <Input type="range" name="outMechnics" id="outMechnics" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="outPopups">Popups</Label>
                        <Input type="range" name="outPopups" id="outPopups" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="outRange">Range</Label>
                        <Input type="range" name="outRange" id="outRange" min="0" max="5" step=".1" />
                    </FormGroup>
                    <h3>Throwing</h3>
                    <FormGroup>
                        <Label for="throwMechanics">Mechanics</Label>
                        <Input type="range" name="throwMechanics" id="throwMechanics" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="throwStrength">Strength</Label>
                        <Input type="range" name="throwStrength" id="throwStrength" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="throwAccuracy">Accuracy</Label>
                        <Input type="range" name="throwAccuracy" id="throwAccuracy" min="0" max="5" step=".1" />
                    </FormGroup>
                    <h3>Hitting</h3>
                    <FormGroup>
                        <Label for="hitMechanics">Mechanics</Label>
                        <Input type="range" name="hitMechanics" id="hitMechanics" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hitPower">Power</Label>
                        <Input type="range" name="hitPower" id="hitPower" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hitContact">Contact</Label>
                        <Input type="range" name="hitContact" id="hitContact" min="0" max="5" step=".1" />
                    </FormGroup>
                    <h3>Feet</h3>
                    <FormGroup>
                        <Label for="speed">Speed</Label>
                        <Input type="range" name="speed" id="speed" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mobility">Mobility</Label>
                        <Input type="range" name="mobility" id="mobility" min="0" max="5" step=".1" />
                    </FormGroup>
                    <h3>Attitude</h3>
                    <FormGroup>
                        <Label for="drive">Drive</Label>
                        <Input type="range" name="drive" id="drive" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="coachability">Coachability</Label>
                        <Input type="range" name="coachability" id="coachability" min="0" max="5" step=".1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="coachComment">Comments</Label>
                        <Input type="textarea" id="coachComment" name="coachComment" rows="8"></Input>
                    </FormGroup>
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