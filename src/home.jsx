import React from 'react';
import NavBar from './navBar';

function Home () {
    return (
        <>
            <NavBar />
            <div>
                
                <h1>Welcome to Our Website</h1>
                <p>This is a classic home page built with React.</p>
                <button>Click Me!</button>
            </div>
        </>
    );
};

export default Home;