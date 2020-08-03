import React from 'react';
import Nav from "./nav.jsx";

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <page-body>
                    <div className="homepage">
                        <h1>Aishwarya Ramanathan</h1>
                        <h2>Current</h2>
                        <ul className="home-list">
                             <li>MMath Candidate at University of Waterloo</li>
                        </ul>
                        <p>Hiya! I’m Aishwarya. You can call me Ash if that’s easier. I enjoy crocheting, painting, and playing football.</p>
                        <img className="pp" src="./images/pp.jpg"/>
                    </div>
                </page-body>
            </div>
        );
    }
}

Homepage.displayName = 'Home';
export default Homepage;
