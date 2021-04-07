import { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="p-5">
                <div className="p-5"></div>
                <div className="p-5"></div>
                </div>
                <Jumbotron fluid className="m-0">
                    <Container fluid>
                        <div className="social-icons"></div>
                        <p>Created by: Brent Owen</p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Footer;