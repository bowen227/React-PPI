import { Component } from 'react';
import { ListGroup, Container, Row, Col,
         Card, CardBody, CardHeader } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import Schedule from '../components/ScheduleComponent';
import PlayerList from '../components/PlayerListComponent';
// import NewEvent from '../components/NewEventModalComponent';
// import CoachList from '../components/CoachListComponent';
import NewPlayer from '../components/NewPlayerModalComponent';
import { addPlayer, createTeams } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        players: state.players,
        schedule: state.schedule,
        coach: state.coach,
        association: state.association,
        teamName: state.teamName,
        league: state.league,
        teams: state.teams
    }
}

const mapDispatchToProps = {
    addPlayer: (firstName, lastName, throws, bats, group) => (addPlayer(firstName, lastName, throws, bats, group)),
    createTeams: (teams) => (createTeams(teams))
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
            isLoading: false
        }

        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTeam = this.addTeam.bind(this)
        this.createTeams = this.createTeams.bind(this)
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

    // create empty array to hold teams
    teams = []

    // method to create balanced teams
    createTeams() {
        this.setState({ isLoading: true })
        
        class Team {
            players = []
        }
        // divide players by 10 to get amount of teams
        const numOfTeams = Math.floor(this.props.players.length / 10)

        // loop players and push to catagories
        const one = this.props.players.filter(p => p.ppi <= 1)
        const two = this.props.players.filter(p => p.ppi > 1 && p.ppi <= 2)
        const three = this.props.players.filter(p => p.ppi > 2 && p.ppi <= 3)
        const four = this.props.players.filter(p => p.ppi > 3 && p.ppi <= 4)
        const five = this.props.players.filter(p => p.ppi > 4)

        // create new teams
        for (let i = 0; i < numOfTeams; i++) {
            const newTeam = new Team()
            newTeam.teamNumber = this.teams.length + 1
            this.teams.push(newTeam)
        }

        // push players to team in descending order
        this.filterPlayers(five, numOfTeams)
        this.filterPlayers(four, numOfTeams)
        this.filterPlayers(three, numOfTeams)
        this.filterPlayers(two, numOfTeams)
        this.filterPlayers(one, numOfTeams)

        // set state of teams
        this.props.createTeams(this.teams)

        // check to see if teams are balanced

        // change loading state
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000);
    }

    teamNum = 0

    // add players to teams
    filterPlayers(group, numOfTeams) {

        for (let i = 0; i < group.length; i++) {
            if (this.teamNum >= numOfTeams) {
                this.teamNum = 0
            }
            this.teams[this.teamNum].players.push(group[i])
            this.teamNum++
        }
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/" />
        }
        if (this.state.isLoading) {
            return (
                <div className="h-100">
                    <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        return (
            <Container className='py-5'>
                <Row>
                    <Col className="py-3" md="8">
                        <h2>{this.props.user.type === 'association' ? `${this.props.user.name}` : `${this.props.user.name}`}</h2>
                        <h2>{this.props.association ? this.props.association : 'No association selected'}</h2>
                    </Col>
                    <Col className="py-3">
                        {this.props.teams.length === 0 ?
                            <button className="btn btn-outline-danger" onClick={this.createTeams}>Draft Players</button>
                            :
                            <div></div>}
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
                {this.props.teams.length === 0 ? 
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
                    :
                    <Container>
                        {/* Change teams to cards click to goto team details */}
                        {this.props.teams.map(teamArr => {
                            const renderTeam = teamArr.map(team => {
                                return (
                                    <Col className="p-1 team-cards" md="4">
                                        <Card key={team.teamNumber}>
                                            <CardHeader>
                                                <h3>Team Number: {team.teamNumber}</h3>
                                            </CardHeader>
                                            <CardBody>
                                                <h5>Amount of Players: {team.players.length}</h5>
                                                <h5>PPI: {team.players.reduce((c, n) => c + Math.round(n.ppi), 0)}</h5>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })
                            return <Row>{ renderTeam }</Row>
                        })}
                    </Container>}
                {/* <NewEvent toggle={this.toggle} isOpen={this.state.eModal} /> */}
                <NewPlayer toggle={this.toggle} isOpen={this.state.pModal} addPlayer={this.props.addPlayer} />
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));