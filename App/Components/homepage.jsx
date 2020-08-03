import React from 'react';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <h1>Aishwarya Ramanathan</h1>
                <ul className="home-list">
                     <li>MMath Candidate at the University of Waterloo</li>
                </ul>
                <p>Hiya! I’m Aishwarya. You can call me Ash if that’s easier. I enjoy crocheting, painting, and playing football.</p>
                <img className="pp" src="./images/pp.jpg"/>
                <a href={"./files/CV2020.pdf"}>CV</a>
            </div>
        );
    }
}

Homepage.displayName = 'Home';
export default Homepage;
