import { Component } from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap';

class PlayerCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <CardHeader>
                    <Row className="align-items-center">
                        <Col xs='2'>
                            Player Image
                        </Col>
                        <Col>
                            Player Name
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    Group:
                    Bats:
                    Throws:
                    PPI:
                </CardBody>
            </Card>
        )
    }
}

export default PlayerCard;