import { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

class PlayerList extends Component {
    constructor(props) {
        super(props);
    }

    goToDetails(id) {
        console.log(`Go to player ${id} details`);
    }

    render() {
        const player = this.props.players.map(player => {
            return (
                <ListGroupItem key={player.id} className="player-list" onClick={() => this.goToDetails(player.id)}>
                    <div className="row justify-content-center">
                        <div className="col-1">
                            <img className="default-user-img" src="./assets/images/default_user.png" alt="player profile image"></img>
                        </div>
                        <div className="col-4 d-flex align-items-center">
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
            <>{player}</>
        );
    }
}

export default PlayerList;