import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';

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
        const selectedTeam = this.props.teams[0][this.props.match.params.id - 1]
        console.log(selectedTeam)
        return (
            <Container>
                <div className="p-2"></div>
                <button className="btn btn-outline-dark" onClick={() => this.props.history.goBack()}>Back</button>
                <div className="p-3"></div>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col>
                                        <h3>
                                            Team: {selectedTeam.teamNumber}
                                        </h3>
                                    </Col>
                                    <Col>
                                        <h3>
                                            {selectedTeam.coach ? `Coach: ${selectedTeam.coach}` : <a href="#">Assign Coach</a>}
                                        </h3>
                                    </Col>
                                    <Col>
                                        <h3>
                                            Team PPI: {Math.floor(selectedTeam.players.reduce((c, n) => c + n.ppi,0))}
                                        </h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row className="py-2">
                                    <Col><strong>First Name</strong></Col>
                                    <Col><strong>Last Name</strong></Col>
                                    <Col><strong>PPI</strong></Col>
                                    <Col><strong>Throws</strong></Col>
                                    <Col><strong>Bats</strong></Col>
                                    <Col><strong>Edit Player</strong></Col>
                                </Row>
                                {selectedTeam.players.map(player => {
                                    return (
                                        <Row className="p-2 border-bottom" key={player.id}>
                                            <Col>
                                                {player.firstName}
                                            </Col>
                                            <Col>
                                                {player.lastName}
                                            </Col>
                                            <Col>
                                                {player.ppi}
                                            </Col>
                                            <Col>
                                                {player.throws}
                                            </Col>
                                            <Col>
                                                {player.bats}
                                            </Col>
                                            <Col>
                                                <button className="btn btn-outline-danger">Update</button>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div className="p-5"></div>
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps)(TeamDetails))
