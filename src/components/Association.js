import { Component } from 'react';

class Association extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container text-left p-5">
                <div className="p-md-5"></div>
                <h2 className="py-3">Associations</h2>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <h3>Create</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">
                                Create association, add logo and association details
                            </li>
                            <li className="list-group-item border-0">
                                Invite admins and coaches to join association
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
                                Add notes on the fly during evaluation
                            </li>
                            <li className="list-group-item border-0">
                                Takes 2 coach evaluations to generate a PPI
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-3">
                        <h3>Draft</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">
                                Use the auto draft feature to create balanced teams
                            </li>
                            <li className="list-group-item border-0">
                                Easily trade same rank players between teams if needed
                            </li>
                            <li className="list-group-item border-0">
                                Auto add players to teams after auto draft
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Association;