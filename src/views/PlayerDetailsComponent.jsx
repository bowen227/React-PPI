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
            selectedPlayer: PLAYERS.map(player => {
                if (player.id == props.match.params.id) {
                    const p = [];
                    p.push(p.firstName, p.lastName, p.throws, p.bats, p.group);
                    return p;
                }
            }),
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({ modal: !this.state.modal });

    render() {
        return (
            <Container className="py-5">
                <Row className="py-3">
                    <Col className="text-right">
                        <button className="btn btn-outline-dark" onClick={() => this.props.history.goBack()}>Back</button>
                        {this.state.selectedPlayer[0]}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PlayerCard />
                        <Button className="mt-2" outline color='danger' onClick={this.toggle}>Evaluate</Button>
                    </Col>
                    <Col>
                        <PastEvals />
                    </Col>
                </Row>
                <EvalModal toggle={this.toggle} isOpen={this.state.modal} />
            </Container>
        )
    }
}

export default withRouter(PlayerDetails);