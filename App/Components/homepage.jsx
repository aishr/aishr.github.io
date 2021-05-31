import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.icons = [
            {
                title: "CV",
                link: "./files/CV2021.pdf",
                icon: "./images/cv.png"
            },
            {
                title: "aishr",
                link: "https://github.com/aishr",
                icon: "./images/githublogo.png"
            },
            {
                title: "aishwaryaramanathan",
                link: "https://www.linkedin.com/in/aishwaryaramanathan/",
                icon: "./images/linkedinlogo.png"
            },
            {
                title: "aramanat@uwaterloo.ca",
                link: "mailto:aramanat@uwaterloo.ca",
                icon: "./images/mail.png"
            },
            {
                title: "a.ramanathan@mail.utoronto.ca",
                link: "mailto:a.ramanathan@mail.utoronto.ca",
                icon: "./images/mail.png"
            },
            {
                title: "aishr@techie.com",
                link: "mailto:aishr@techie.com",
                icon: "./images/mail.png"
            }
        ]
    }
    
    render() {
        return (
            <div className="homepage">
                <h1>Aishwarya Ramanathan</h1>
                <ul className="home-list">
                     <li>MMath Candidate at the University of Waterloo</li>
                </ul>
                <p>Hiya! I’m Aishwarya. You can call me Ash if that’s easier. I enjoy crocheting, painting, and playing football.</p>
                <img className="pp" src={"./images/pp.jpg"} alt={"pp"}/>
                <div className="iconContainer">
                    {this.icons.map((item, key) => (
                        <a href={item.link} target="_blank" key={key}>
                            <img className="icons" src={item.icon}  alt={"icon"}/>
                            <p>{item.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

Homepage.displayName = 'Home';
export default Homepage;
