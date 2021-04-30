import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { evalPlayer } from '../redux/ActionCreators';

const mapDispatchToProps = {
    evalPlayer: (id, evaluation) => (evalPlayer(id, evaluation))
}

class EvalModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inMechanics: 1,
            inGroundballs: 0,
            inRange: 0,
            outMechnics: 0,
            outPopups: 0,
            outRange: 0,
            throwMechanics: 0,
            throwStrength: 0,
            throwAccuracy: 0,
            hitMechanics: 0,
            hitPower: 0,
            hitContact: 0,
            speed: 0,
            mobility: 0,
            drive: 0,
            coachability: 0,
            coachComment: ''
        }
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        console.log(event)
        // this.setState({ [name]: value })
    }

    addEval() {
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Evaluate Player</ModalHeader>
                <ModalBody>
                    <h3>Infield</h3>
                    <FormGroup>
                        <Label for="inMechanics">Mechanics {this.state.inMechanics}</Label>
                        <Input type="range" name="inMechanics" min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inGroundballs">Groundballs</Label>
                        <Input type="range" name="inGroundballs" value={this.state.inGroundballs} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inRange">Range</Label>
                        <Input type="range" name="inRange" value={this.state.inRange} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <h3>OutField</h3>
                    <FormGroup>
                        <Label for="outMechnics">Mechanics</Label>
                        <Input type="range" name="outMechnics" value={this.state.outMechnics} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="outPopups">Popups</Label>
                        <Input type="range" name="outPopups" value={this.state.outPopups} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="outRange">Range</Label>
                        <Input type="range" name="outRange" value={this.state.outRange} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <h3>Throwing</h3>
                    <FormGroup>
                        <Label for="throwMechanics">Mechanics</Label>
                        <Input type="range" name="throwMechanics" value={this.state.throwMechanics} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="throwStrength">Strength</Label>
                        <Input type="range" name="throwStrength" value={this.state.throwStrength} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="throwAccuracy">Accuracy</Label>
                        <Input type="range" name="throwAccuracy" value={this.state.throwAccuracy} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <h3>Hitting</h3>
                    <FormGroup>
                        <Label for="hitMechanics">Mechanics</Label>
                        <Input type="range" name="hitMechanics" value={this.state.hitMechanics} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hitPower">Power</Label>
                        <Input type="range" name="hitPower" value={this.state.hitPower} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hitContact">Contact</Label>
                        <Input type="range" name="hitContact" value={this.state.hitContact} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <h3>Feet</h3>
                    <FormGroup>
                        <Label for="speed">Speed</Label>
                        <Input type="range" name="speed" value={this.state.speed} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mobility">Mobility</Label>
                        <Input type="range" name="mobility" value={this.state.mobility} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <h3>Attitude</h3>
                    <FormGroup>
                        <Label for="drive">Drive</Label>
                        <Input type="range" name="drive" value={this.state.drive} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="coachability">Coachability</Label>
                        <Input type="range" name="coachability" value={this.state.coachability} min="0" max="5" step=".1" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="coachComment">Comments</Label>
                        <Input type="textarea" name="coachComment" value={this.state.coachComment} rows="8" onChange={this.handleChange}></Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={this.addEval}>Save</Button>
                    <Button color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(EvalModal));