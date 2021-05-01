import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import EvalModal from '../components/EvalModalComponent';
import PastEvals from '../components/PastEvalsComponent';
import PlayerCard from '../components/PlayerCardComponent';

const mapStateToProps = state => {
    return {
        players: state.players,
    }
}

class PlayerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({ modal: !this.state.modal });

    render() {
        const selectedPlayer = this.props.players[this.props.match.params.id - 1]
        return (
            <Container className="py-5 player-details">
                <Row className="py-3">
                    <Col className="text-right">
                        <button className="btn btn-outline-dark" onClick={() => this.props.history.goBack()}>Back</button>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="my-2">
                        <PlayerCard player={selectedPlayer} />
                        <Button className="mt-2" outline color='danger' onClick={this.toggle}>Evaluate</Button>
                    </Col>
                    <Col className="my-2">
                        <PastEvals playerId={selectedPlayer.id} />
                    </Col>
                </Row>
                <EvalModal toggle={this.toggle} isOpen={this.state.modal} player={selectedPlayer.id} />
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps)(PlayerDetails));
