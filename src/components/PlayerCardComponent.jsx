import { Component } from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap';

class PlayerCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const renderPpi = Object.values(this.props.player.evaluations[this.props.player.evaluations.length - 1])
        return (
            <Card>
                <CardHeader>
                    <Row className="align-items-center">
                        <Col xs='3'>
                            <img className="w-100" src="../assets/images/default_user.png" alt="Player profile"></img>
                        </Col>
                        <Col>
                            <h3 className="m-0">{this.props.player.firstName + " " + this.props.player.lastName}</h3>
                            <small>Positon goes here</small>
                        </Col>
                        <Col xs="3" md="2">
                            {/* <button className="btn btn-outline-danger">&#9998;</button> */}
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Row className="flex-nowrap">
                        <Col>
                            <h5>Position</h5>
                        </Col>
                        <Col>
                            <h5>Bats</h5>
                        </Col>
                        <Col>
                            <h5>Throws</h5>
                        </Col>
                        <Col>
                            <h5>PPI</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{this.props.player.group}</Col>
                        <Col>{this.props.player.bats}</Col>
                        <Col>{this.props.player.throws}</Col>
                        <Col>{this.props.player.evaluations.length > 0 ? 
                            <span>
                                {/* {(renderPpi.splice(0, renderPpi.length - 1).reduce((c, n) => c + +n, 0) / 16).toFixed(2)} */}
                                {this.props.player.ppi}
                            </span>
                            :
                            <span>Not rated</span>
                            }
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default PlayerCard;