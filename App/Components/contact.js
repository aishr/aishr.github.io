import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-page">
                <h4>Email</h4>
                <a className="emailLinks" href="mailto:a.ramanathan@mail.utoronto.ca" target="_blank">Academic Related</a>
                <a className="emailLinks" href="mailto:cutieice@gmail.com" target="_blank">Everything Else</a>
                <div className="iconContainer">
                    <a href="https://github.com/aishr">
                        <img className="icons" src="./images/githublogo.png"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aishwaryaramanathan/">
                        <img className="icons" src="./images/linkedinlogo.png"/>
                    </a>
                    <a href="https://twitter.com/aischoo">
                        <img className="icons" src="./images/twitter.png"/>
                    </a>
                </div>
            </div>
        );
    }
}

Contact.displayName = "Contact";
export default Contact;
