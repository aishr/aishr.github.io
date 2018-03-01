import React from 'react';
import ReactDOM from 'react-dom';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <h1>Aishwarya Ramanathan</h1>
                <ul className="home-list">
                     <li>Computer Science Undergrad at UofT Mississauga</li>
                     <li>Full Stack Dev Intern at Indigo Books & Music</li> 
                </ul>
                <img className="pp" src="./images/pp.jpg"/>
            </div>
        );
    }
}

Homepage.displayName = 'Home';
export default Homepage;
