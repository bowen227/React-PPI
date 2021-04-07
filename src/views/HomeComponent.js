import { Component } from 'react';
import Navigation from '../components/NavComponent';
import Hero from '../components/HeroComponent';
import Association from '../components/AssociationComponent';
import Coaches from '../components/CoachesComponent';
import Footer from '../components/FooterComponent';

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