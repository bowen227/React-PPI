import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPlayer } from '../redux/ActionCreators';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const mapDispatchToProps = {
    addPlayer: (firstName, lastName, throws, bats, group) => (addPlayer(firstName, lastName, throws, bats, group)),
}
class NewPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            throws: 'right',
            bats: 'right',
            group: '6U',
            evaluations: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.newPlayer = this.newPlayer.bind(this)
    }

    newPlayer(event) {
        this.props.addPlayer(this.state.firstName, this.state.lastName, this.state.throws, this.state.bats, this.state.group, this.state.evaluations)

        this.props.toggle(event)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>New Player</ModalHeader>
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
                                <option value="6U">6U</option>
                                <option value="8U">8U</option>
                                <option value="10U">10U</option>
                                <option value="12U">12U</option>
                            </Input>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="profileImg">Profile Image</Label>
                            <Input type="file" id="profileImg" name="profileImg" />
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button name="pModal" color="dark" onClick={this.newPlayer}>Save</Button>
                    <Button name="pModal" color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addNewPlayer: (payload) => {
//             dispatch({ type: "ADDED_PLAYER", payload: payload })
//         }
//     }
// }

export default withRouter(connect(null, mapDispatchToProps)(NewPlayer));
