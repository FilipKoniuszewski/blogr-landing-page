import React from 'react';
import Intro from "./Intro";
import Features from "./Features";
import Demo from "./Demo";
import Description from "./Description";

function LandingPage(props) {
    return (
        <main>
            <Intro />
            <Features />
            <Demo />
            <Description />
        </main>
    );
}

export default LandingPage;