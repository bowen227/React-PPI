import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { assignCoach, assignCoachToTeam } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        coaches: state.coaches
    }
}

const mapDispatchToProps = {
    assignCoach: (id, teamNumber) => (assignCoach(id, teamNumber)),
    assignCoachToTeam: (coach, teamNumber) => (assignCoachToTeam(coach, teamNumber))
}

class SelectCoach extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedCoach: null,
            teamNumber: this.props.teamNumber
        }

        this.handleChange = this.handleChange.bind(this)
        this.addCoach = this.addCoach.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({ [name]: value })
    }

    addCoach(event) {
        event.preventDefault()
        const coach = this.props.coaches.filter(coach => coach.id == +this.state.selectedCoach)[0]
        this.props.assignCoach(this.state.selectedCoach, this.props.teamNumber)
        this.props.assignCoachToTeam(coach, this.props.teamNumber)
        this.setState({ selectedCoach: null })
        this.props.toggle(event)
    }

    render() {
        const showCoachList = this.props.coaches.map(coach => {
            if (!coach.teamNumber) {
                return <option key={coach.id} value={coach.id}>{coach.firstName} {coach.lastName}</option>
            }
        })
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>Assign Coach</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="selectedCoach">Select Coach</Label>
                            <select name="selectedCoach" id="selectedCoach" value={this.state.selectedCoach} onChange={this.handleChange}>
                                <option value="none">Choose a coach...</option>
                                {showCoachList}
                            </select>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button name="sModal" color="dark" onClick={this.addCoach}>Save</Button>
                    <Button name="sModal" color="warning" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectCoach))