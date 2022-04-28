import React from 'react';
import "../Style/Intro.css"

export default function Intro() {
    return (
        <section className="intro">
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="intro-go-to">
                <div className="start">
                    Start for Free
                </div>
                <div className="learn">
                    Learn More
                </div>
            </div>
        </section>
    );
}