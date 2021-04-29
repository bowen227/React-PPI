import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        teams: state.teams,
    }
}

class TeamDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Team details working
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(TeamDetails))
