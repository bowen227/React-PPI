import { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

class Schedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const schedule = this.props.schedule.map(event => {
            if (event.id < 5) {
                return (
                    <ListGroupItem key={event.id}>
                        <div className="row">
                            <div className="col">
                                {event.title}
                            </div>
                            <div className="col-3">
                                {event.location}
                            </div>
                            <div className="col-2">
                                {event.time}
                            </div>
                        </div>
                    </ListGroupItem>
                );
            }
        });
        return(
            <>{schedule}</>
        )
    }
}

export default Schedule;