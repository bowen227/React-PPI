import { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { PLAYERS } from '../shared/players';
import Schedule from '../components/ScheduleComponent';
import { SCHEDULE } from '../shared/schedule';
import PlayerList from '../components/PlayerListComponent';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            players: PLAYERS,
            team: null,
            association: null,
            league: null,
            schedule: SCHEDULE
        }
    }

    render() {
        return(
            <div className='container py-5'>
                <div className="row">
                    <div className="col">
                        <h2>{this.state.team ? this.state.team : 'No team selected'}</h2>
                        <span>{this.state.league ? this.state.league : 'No league selected'}</span>
                    </div>
                    <div className="col">
                        <h3>Upcoming Events</h3>
                        <ListGroup flush >
                            <Schedule schedule={this.state.schedule} />
                        </ListGroup>
                    </div>
                </div>
                <div className="row pt-5">
                    <ListGroup flush className="w-100">
                        <PlayerList players={this.state.players} />
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default Dashboard;