import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class PlayerList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const player = this.props.players.map(player => {
            return (
                <Link key={player.id} className="list-group-item player-list border-none border-bottom" to={`/playerDetails/${player.id}`}>
                    <div className="row justify-content-center p-1">
                        <div className="col-xs-2">
                            <img className="default-user-img" src="./assets/images/default_user.png" alt="player profile image"></img>
                        </div>
                        <div className="col d-flex align-items-center">
                            {player.firstName + ' ' + player.lastName}
                        </div>
                        <div className="col d-none d-md-flex align-items-center">
                            {player.throws}
                        </div>
                        <div className="col d-none d-md-flex align-items-center">
                            {player.bats}
                        </div>
                        <div className="col d-none d-md-flex align-items-center">
                            {player.group}
                        </div>
                        <div className="col-2 d-flex align-items-center">
                            {player.ppi}
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <>
                {player}
            </>
        );
    }
}

export default PlayerList;