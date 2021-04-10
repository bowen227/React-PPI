import { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import EvalModal from '../components/EvalModalComponent';
import PastEvals from '../components/PastEvalsComponent';
import PlayerCard from '../components/PlayerCardComponent';

class PlayerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return(
            <Container className="py-5">
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

export default PlayerDetails;