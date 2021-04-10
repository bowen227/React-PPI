import { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { PLAYERS } from '../shared/players';
import PlayerList from '../components/PlayerListComponent';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            players: PLAYERS,
            team: null,
            association: null,
            league: null
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
                        ScheduleComponent goes here
                    </div>
                </div>
                <div className="row py-5">
                    <ListGroup flush className="w-100">
                        <PlayerList players={this.state.players} />
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default Dashboard;