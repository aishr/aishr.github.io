import React from 'react'
import Nav from "./nav.jsx";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Nav />
            <page-body>
                <div className="contact-page">
                    <div className="email-container">
                        <h4>Email</h4>
                        <a className="emailLinks" href="mailto:aramanathan@uwaterloo.ca" target="_blank">Academic Related</a>
                        <a className="emailLinks" href="mailto:cutieice@gmail.com" target="_blank">Other</a>
                    </div>
                    <div className="iconContainer">
                        <a href="https://github.com/aishr" target="_blank">
                            <img className="icons" src="./images/githublogo.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aishwaryaramanathan/" target="_blank">
                            <img className="icons" src="./images/linkedinlogo.png"/>
                        </a>
                        <a href="https://twitter.com/aischoo" target="_blank">
                            <img className="icons" src="./images/twitter.png"/>
                        </a>
                    </div>
                </div>
            </page-body>
            </div>
        );
    }
}

Contact.displayName = "Contact";
export default Contact;
