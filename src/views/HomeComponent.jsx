import { Component } from 'react';
import Hero from '../components/HeroComponent';
import Association from '../components/AssociationComponent';
import Coaches from '../components/CoachesComponent';

function Home() {
    return (
        <>
            <Hero />
            <Association />
            <Coaches />
        </>
    )
}

export default Home;