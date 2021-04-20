import { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Footer extends Component {

    render() {
        return(
            <div>
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