import React from 'react';
import "../Style/Demo.css"
import art from "../Assets/images/illustration-phones.svg"

function Demo(props) {
    return (
        <section className="demo">
            <div className="demo-picture">
                <img src={art} alt={art} />
            </div>
            <div className="demo-text">
                <h2>State of the Art Infrastructure</h2>
                <p>With reliability and speed in mind, 
                    worldwide data centers provide the 
                    backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, 
                    no matter where your readers are, keeping 
                    your site competitive.
                </p>
            </div>
        </section>
       
    );
}

export default Demo;