import React from 'react';
import Nav from "./nav.jsx";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.publications = [
            {
                author: "Zehra, S., Ramanathan, A., Zhang, L. Y., and Zingaro, D",
                title: "Student Misconceptions of Dynamic Programming",
                journal: "49th ACM Technical Symposium on Computer Science Education (SIGCSE '18)",
                link: "https://dl.acm.org/citation.cfm?id=3159528"
            }
        ];
        this.personalProjects = [
            {
                title: "Colour Detector",
                source: "https://github.com/aishr/ImageUnderstanding/tree/master/ColourDetector",
                description: "Written in Python using OpenCV, this project detects the colour of retail merchandise " +
                    "using frequencies of pixel values. Colours are classified based on 216 web safe colours.",
                photo: "./images/colourdetector.gif"
            },
            {
                title: "Personal Website",
                source: "https://github.com/aishr/aishr.github.io",
                description:"Written in React JS, this project was and is for my own exploration and experimentation " +
                    "purposes.",
                photo: "./images/website.gif"
            },
            {
                title: "Personal Startpage",
                source: "https://github.com/aishr/uni-startpage",
                website: "https://aishr.github.io/uni-startpage",
                description: "I created a startpage as a browser home page. The startpage features an icon dock that " +
                    "mimics the OSX application dock. The search bar provided accepts keyboard shortcuts to all labelled " +
                    "links and icons on the page and defaults to google otherwise.",
                photo: "./images/startpage.gif"
            },
            {
                title: "Jello",
                description: "Inspired by Jira and Trello, I wanted to create a scrum, kanban, etc. board website." +
                    "This was another experimentation project to get an idea of building a full stack website with auth."
            }
        ];
        this.courseProjects = [
            {
                title: "Spacer Visualizer",
                source: "https://github.com/nhamlv-55/spacer-visualization",
                description: "Inspired by a saturation visualizer for Vampire, this visualizer depicts SPACER's " +
                    "exploration tree.",
                photo: "./images/spacervisualizer.gif"
            },
            {
                title: "Spacer Dashboard",
                source: "https://github.com/nhamlv-55/spacer-visualization/tree/flash-fill",
                description: "A summary dashboard of SPACER metrics on a variety of benchmarks. The dashboard includes" +
                    "different views for a select set of metrics, including time, memory, number of lemmas, etc.",
                photo: "./images/dashboard.gif"
            },
            {
                title: "ML to Python transpiler",
                description: "Using flex and bison, a partner and I created a lexer and parser for parts of ML syntax " +
                    "that could be viably converted to Python code."
            }
        ]
    }
    render() {
        return (
            <div className="about-page">
                <h3>Personal Projects</h3>
                <ul className="about-list">
                {this.personalProjects.map((item, key) => (
                    <div className="flip-card" key={key}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {item.photo && <img src={item.photo} alt={"photo"}/>}
                                <h2>{item.title}</h2>
                                {item.subtitle && <p>{item.subtitle}</p>}
                            </div>
                            <div className="flip-card-back">
                                <div className={"flip-card-content"}>
                                    <p>{item.description}</p>
                                    {item.source && <a href={item.source} target={"_blank"}>(Source Code)</a>}
                                    {item.website && <a href={item.website} target={"_blank"}>(Website)</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </ul>
                <h3>Course Projects</h3>
                <ul className="about-list">
                    {this.courseProjects.map((item, key) => (
                        <div className="flip-card" key={key}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {item.photo && <img src={item.photo} alt={"photo"}/>}
                                    <h2>{item.title}</h2>
                                    {item.subtitle && <p>{item.subtitle}</p>}
                                </div>
                                <div className="flip-card-back">
                                    <div className={"flip-card-content"}>
                                        <p>{item.description}</p>
                                        {item.source && <a href={item.source} target={"_blank"}>(Source Code)</a>}
                                        {item.website && <a href={item.website} target={"_blank"}>(Website)</a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
                <h3>Publications</h3>
                <ul className="about-list">
                    {this.publications.map((item, key) => (
                        <p className="citation" key={key}>
                            {item.author}. {item.title}. In Proceedings of the {item.journal}.
                            <a href={item.link} target="_blank">Link</a>
                        </p>
                    ))}
                </ul>
            </div>
        );
    }
}

About.displayName = 'About';
export default About; 
