import { Component } from 'react';
import Hero from '../components/HeroComponent';
import Association from '../components/AssociationComponent';
import Coaches from '../components/CoachesComponent';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Hero />
                <Association />
                <Coaches />
            </>
        )
    }
}

export default Home;