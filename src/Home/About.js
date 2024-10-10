import React from 'react';
import NavBar from './Navigation';

function About()
{
    return(
        <>
        <NavBar/>
        <main style={{textAlign:"left",fontSize:+25}}>
            <div class="container main">
            <h1>Welcome to Our Student Evalvation System</h1>
            <p>Our Product is dedicated to providing the best services to Students. We believe in quality, innovation, and Student satisfaction. Our team is composed of talented and passionate individuals who work tirelessly to meet and exceed your expectations.</p>
            <div class="team">
                <div class="team-member">
                    <img src={require('../Imgs/pic.jpeg')} alt="Team Member 1"/>
                    <h3>Abcd</h3>
                    <p>Chairman</p>
                </div>
                <div class="team-member">
                    <img src={require('../Imgs/pic1.jpg')} alt="Team Member 2"/>
                    <h3>Pqrs</h3>
                    <p>Vice Chairman</p>
                </div>
                <div class="team-member">
                    <img src={require('../Imgs/pic2.png')} alt="Team Member 3"/>
                    <h3>Xyz</h3>
                    <p>Co-Ordinator</p>
                </div>
            </div>
            </div>
        </main>
        </>
    );
}
export default About;