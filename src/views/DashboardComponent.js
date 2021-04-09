import { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { PLAYERS } from '../shared/players';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: PLAYERS
        }
    }

    render() {
        const playerList = this.state.players.map(player => {
            return (
                <ListGroupItem className="player-list">
                    <div className="row justify-content-center">
                        <div className="col-1">
                            <img className="default-user-img" src="./assets/images/default_user.png"></img>
                        </div>
                        <div className="col d-flex align-items-center">
                            {player.firstName + ' ' + player.lastName}
                        </div>
                        <div className="col d-flex align-items-center">
                            {player.throws}
                        </div>
                        <div className="col d-flex align-items-center">
                            {player.bats}
                        </div>
                        <div className="col d-flex align-items-center">
                            {player.group}
                        </div>
                        <div className="col d-flex align-items-center">
                            0.00
                        </div>
                    </div>
                </ListGroupItem>
            );
        });

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
                        {playerList}
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default Dashboard;