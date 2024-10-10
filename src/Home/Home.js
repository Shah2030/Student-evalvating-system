import React from 'react';
import Slideshow from './Slideshow';
import NavBar from './Navigation';
function Home()
{
    
    return(
        <>
            <NavBar/>
            <main>
                <div className="div">
                    <h1>Advertisement</h1>
                    <Slideshow/>
                </div>
                <div className="div">
                    <h1>Cources Details</h1>
                    <img src={require('../Imgs/co.png')} alt="cource Details" style={{width: '30rem',height: '30rem'}}/>
                </div>
            </main>
        </>
    );
}
export default Home;