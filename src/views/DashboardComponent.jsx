import { Component } from 'react';
import { ListGroup, Container, Row, Col, Button } from 'reactstrap';
import { Redirect } from 'react-router';
import { PLAYERS } from '../shared/players';
import Schedule from '../components/ScheduleComponent';
import { SCHEDULE } from '../shared/schedule';
import PlayerList from '../components/PlayerListComponent';
import NewEvent from '../components/NewEventModalComponent';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            players: PLAYERS,
            team: null,
            association: null,
            league: null,
            schedule: SCHEDULE,
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/" />
        }
        return(
            <Container className='py-5'>
                <Row>
                    <Col className="py-3" md="6">
                        <h2>{this.state.team ? this.state.team : 'No team selected'}</h2>
                        <span>{this.state.league ? this.state.league : 'No league selected'}</span>
                    </Col>
                    <Col className="py-3">
                        <Row>
                            <Col>
                                <h3>Upcoming Events</h3>
                            </Col>
                            <Col>
                                <Button onClick={this.toggle}>Add Event</Button>
                            </Col>
                        </Row>
                        <ListGroup flush >
                            <Schedule schedule={this.state.schedule} />
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <ListGroup flush className="w-100">
                        <PlayerList players={this.state.players} />
                    </ListGroup>
                </Row>
                <NewEvent toggle={this.toggle} isOpen={this.state.modal} />
            </Container>
        )
    }
}

export default Dashboard;