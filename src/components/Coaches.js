import { Component } from 'react';

class Coaches extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container text-left p-5">
                <div className="p-md-5"></div>
                <h2 className="py-4">Coaches</h2>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <h3>Create</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">
                                Create team, add team logo and details
                            </li>
                            <li className="list-group-item border-0">
                                Invite assistant coaches to join the team
                            </li>
                            <li className="list-group-item border-0">
                                Add players at sign up, camps or tryouts
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-3">
                        <h3>Evaluate</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">
                                Rank players in 6 key areas of the game
                            </li>
                            <li className="list-group-item border-0">
                                Add notes on the fly during evaluations
                            </li>
                            <li className="list-group-item border-0">
                                Takes 2 coach evaluations to generate a PPI
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-3">
                        <h3>Report</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">
                                Use the PPI per area to see weaknesses
                            </li>
                            <li className="list-group-item border-0">
                                Update a players PPI as the season goes on to show progress
                            </li>
                            <li className="list-group-item border-0">
                                End of season evaluation to see overall player growth
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coaches;