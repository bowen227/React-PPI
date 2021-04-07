import { Component } from 'react';

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
                        <button className="btn btn-outline-dark">Sign Up</button>
                    </div>
                    <div className="col my-2">
                        <img src="./assets/images/baseball_1.jpeg" width="100%" height="auto"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;