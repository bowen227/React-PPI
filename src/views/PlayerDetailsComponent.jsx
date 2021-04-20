import { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import EvalModal from '../components/EvalModalComponent';
import PastEvals from '../components/PastEvalsComponent';
import PlayerCard from '../components/PlayerCardComponent';
import { PLAYERS } from '../shared/players';

class PlayerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // playerId: props.match.params.id,
            player: PLAYERS[props.match.params.id - 1],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({ modal: !this.state.modal });

    render() {
        return (
            <Container className="py-5 player-details">
                <Row className="py-3">
                    <Col className="text-right">
                        <button className="btn btn-outline-dark" onClick={() => this.props.history.goBack()}>Back</button>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="my-2">
                        <PlayerCard player={this.state.player} />
                        <Button className="mt-2" outline color='danger' onClick={this.toggle}>Evaluate</Button>
                    </Col>
                    <Col className="my-2">
                        <PastEvals />
                    </Col>
                </Row>
                <EvalModal toggle={this.toggle} isOpen={this.state.modal} />
            </Container>
        )
    }
}

export default withRouter(PlayerDetails);