import React from 'react'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.emails = ["aramanat@uwaterloo.ca", "a.ramanathan@mail.utoronto.ca", "aishwarya.ramanathan123@gmail.com"];
    }
    render() {
        return (
                <div className="contact-page">
                    <div className="email-container">
                        {this.emails.map((email, key) => (
                            <a key={key} className={"emailLinks"} href={"mailto:" + email} target={"_blank"}>{email}</a>
                        ))}
                    </div>
                    <div className="iconContainer">
                        <a href="https://github.com/aishr" target="_blank">
                            <img className="icons" src="./images/githublogo.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aishwaryaramanathan/" target="_blank">
                            <img className="icons" src="./images/linkedinlogo.png"/>
                        </a>
                    </div>
                </div>
        );
    }
}

Contact.displayName = "Contact";
export default Contact;
