import { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';

class CoachList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const coach = this.props.coaches.map(coach => {
            return (
                <Link key={coach.id} className="list-group-item player-list" to={`/coachDetails/${coach.id}`}>
                    <div className="row justify-content-center p-1">
                        <div className="col-xs-2">
                            <img className="default-user-img" src="./assets/images/default_user.png" alt="Coach profile image"></img>
                        </div>
                        <div className="col d-flex align-items-center">
                            {coach.firstName + ' ' + coach.lastName}
                        </div>
                        <div className="col d-none d-md-flex align-items-center">
                            {coach.group}
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <>{coach}</>
        );
    }
}

export default CoachList;