import { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {

    render() {
        return(
            <div id="hero" className="container d-flex align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-6 text-left my-2">
                        <h1>A better way to evaluate baseball players</h1>
                        <p>
                            Generate a Player Power Index for tryouts, camps and player development. Save time drafting players and creating 
                            balanced teams.
                        </p>
                        <Link className="btn btn-outline-dark" to="/signup">Sign Up</Link>
                    </div>
                    <div className="col my-2">
                        <img src="./assets/images/baseball_1.jpeg" width="100%" height="auto" alt="Baseball glove in grass with baseballs laying around"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;