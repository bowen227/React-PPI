import { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { PLAYERS } from '../shared/players';
import PlayerList from '../components/PlayerListComponent';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            players: PLAYERS
        }
    }

    render() {
        return(
            <div className='container py-5'>
                <div className="row">
                    <div className="col">
                        team/association info goes here. coaches, league, w/l etc...
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