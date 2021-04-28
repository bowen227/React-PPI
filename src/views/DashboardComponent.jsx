import { Component } from 'react';
import { ListGroup, Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Schedule from '../components/ScheduleComponent';
import PlayerList from '../components/PlayerListComponent';
import NewEvent from '../components/NewEventModalComponent';
import CoachList from '../components/CoachListComponent';
import NewPlayer from '../components/NewPlayerModalComponent';
import { addPlayer } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        players: state.players,
        schedule: state.schedule,
        coach: state.coach,
        association: state.association,
        teamName: state.teamName,
        league: state.league
    }
}

const mapDispatchToProps = {
    addPlayer: (firstName, lastName, throws, bats, group) => (addPlayer(firstName, lastName, throws, bats, group))
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eModal: false,
            pModal: false,
            teamName: null,
            tempName: null,
            addTeam: false,
            association: null,
            league: null,
        }

        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTeam = this.addTeam.bind(this)
    }

    toggle(event) {
        this.setState({ [event.target.name]: !this.state[event.target.name] })
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({ [name]: value })
    }

    addTeam(event) {
        event.preventDefault()
        console.log(this.state.tempName)
        this.setState({ teamName: this.state.tempName })
        this.setState({ addTeam: false })
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/" />
        }
        return (
            <Container className='py-5'>
                <Row>
                    <Col className="py-3" md="6">
                        <h2>{this.props.user.type === 'association' ? `Association: ${this.props.user.name}` : `Coach: ${this.props.user.name}`}</h2>
                        {/* <h2>{this.props.association ? this.props.association : 'No association selected'}</h2> */}
                        <h2>{this.state.teamName ? this.state.teamName : 'No team selected'}</h2>
                        {!this.state.teamName ?
                            <p>{!this.state.addTeam ?
                                <button className="btn btn-outline-dark" onClick={() => this.setState({ addTeam: true })}>Add Team ?</button>
                                :
                                <div>
                                    <input type="text" name="tempName" onChange={this.handleChange} />
                                    <button className="btn btn-outline-dark ml-2" onClick={this.addTeam}>Save</button>
                                </div>}
                            </p>
                            :
                            ''
                        }
                        <span>{this.props.league ? this.props.league : 'No league selected'}</span>
                    </Col>
                    <Col className="py-3">
                        {/* <Row>
                            <Col>
                                <h3>Upcoming Events</h3>
                            </Col>
                            <Col>
                                <Button name="eModal" onClick={this.toggle}>Add Event</Button>
                            </Col>
                        </Row> */}
                        {/* <ListGroup flush >
                            <Schedule schedule={this.props.schedule} />
                        </ListGroup> */}
                    </Col>
                </Row>
                <Row className="d-flex">
                    <button name="pModal" className="btn btn-outline-dark m-2" onClick={this.toggle}>Add Player</button>
                    <button className="btn btn-outline-dark m-2">
                        {this.props.user.type === 'association' ? 'Add Coach' : 'Add Assistant'}
                    </button>
                </Row>
                <Row className="pt-5">
                    <Col className="players-list-container">
                        <h3>Player List</h3>
                        {this.props.players ?
                            <ListGroup flush className="w-100">
                                <PlayerList players={this.props.players} />
                            </ListGroup>
                            :
                            <div>No Players to display</div>
                        }
                    </Col>
                    {/* <Col md="6" className="pl-md-3 coaches-list-container">
                        <h3>Coaches List</h3>
                        {this.state.coaches ?
                            <ListGroup flush className="w-100">
                                <CoachList coaches={this.state.coaches} />
                            </ListGroup>
                            :
                            <div>No Coaches to display</div>
                    }
                    </Col> */}
                </Row>
                {/* <NewEvent toggle={this.toggle} isOpen={this.state.eModal} /> */}
                <NewPlayer toggle={this.toggle} isOpen={this.state.pModal} addPlayer={this.props.addPlayer} />
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));