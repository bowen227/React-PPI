import { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
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
                    PlayerListComponent goes here
                </div>
            </div>
        )
    }
}

export default Dashboard;