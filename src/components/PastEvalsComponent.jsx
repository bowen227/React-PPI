import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';

const mapStateToProps = state => {
    return {
        players: state.players,
    }
}

class PastEvals extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const player = this.props.players.filter(player => player.id === this.props.playerId)[0]
        return (
            <Card>
                <CardHeader>Past Evals</CardHeader>
                <CardBody>
                    {player.evaluations.length > 0 ?
                        <Container>
                            <Row className="p-2">
                                <Col>In</Col>
                                <Col>Out</Col>
                                <Col>T</Col>
                                <Col>H</Col>
                                <Col>SM</Col>
                                <Col>DCC</Col>
                            </Row>
                            {player.evaluations.map((item, index) => {
                                return (
                                    <Row className="border-bottom p-2" key={index}>
                                        <Col>
                                            {((+item.inMechanics + +item.inGroundballs + +item.inRange) / 3).toFixed(2)}
                                        </Col>
                                        <Col>
                                            {((+item.outMechnics + +item.outPopups + +item.outRange) / 3).toFixed(2)}
                                        </Col>
                                        <Col>
                                            {((+item.throwMechanics + +item.throwStrength + +item.throwAccuracy) / 3).toFixed(2)}
                                        </Col>
                                        <Col>
                                            {((+item.hitMechanics + +item.hitPower + +item.hitContact) / 3).toFixed(2)}
                                        </Col>
                                        <Col>
                                            {((+item.speed + +item.mobility) / 2).toFixed(2)}
                                        </Col>
                                        <Col>
                                            {((+item.drive + +item.coachability) / 2).toFixed(2)}
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Container>
                        :
                        <div />
                    }
                </CardBody>
            </Card>
        )
    }
}

export default withRouter(connect(mapStateToProps)(PastEvals));