import React from 'react';
import "../Style/Intro.css"

export default function Intro() {
    return (
        <section className="intro">
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="intro-go-to">
                <button className="start">
                    Start for Free
                </button>
                <button className="learn">
                    Learn More
                </button>
            </div>
        </section>
    );
}