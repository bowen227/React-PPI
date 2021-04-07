import { Component } from 'react';

class Hero extends Component {

    render() {
        return(
            <div className="container">
                <div className="p-5"></div>
                <div className="p-md-5"></div>
                <div className="row align-items-center">
                    <div className="col-md-6 text-left">
                        <h1>A better way to evaluate baseball players</h1>
                        <p>
                            Generate a Player Power Index for tryouts, camps and player development. Save time drafting players and creating 
                            balanced teams.
                        </p>
                        <button className="btn btn-outline-dark">Sign Up</button>
                    </div>
                    <div className="col">
                        <img src="./assets/images/baseball_1.jpeg" width="100%" height="auto"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;