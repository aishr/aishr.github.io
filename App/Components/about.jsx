import React from 'react';
import Project from "./project.jsx";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.publications = [
            {
                author: "Aishwarya Ramanathan",
                title: "Hubble Spacer Telescope",
                journal: "",
                link: "https://uwspace.uwaterloo.ca/handle/10012/17921"
            },
            {
                author: "Zehra, S., Ramanathan, A., Zhang, L. Y., and Zingaro, D",
                title: "Student Misconceptions of Dynamic Programming",
                journal: "49th ACM Technical Symposium on Computer Science Education (SIGCSE '18)",
                link: "https://dl.acm.org/citation.cfm?id=3159528"
            },

        ];
        this.personalProjects = [
            {
                title: "Colour Detector",
                source: [
                    {
                        title: "Source Code",
                        url: "https://github.com/aishr/ImageUnderstanding/tree/master/ColourDetector"
                    },
                ],
                description: "Written in Python using OpenCV, this project detects the colour of retail merchandise " +
                    "using frequencies of pixel values. Colours are classified based on 216 web safe colours.",
                photo: "./images/colourdetector.gif"
            },
            {
                title: "Website",
                source: [
                    {
                        title: "Source Code",
                        url: "https://github.com/aishr/aishr.github.io"
                    }
                ],
                description:"Written in React JS, this project was and is for my own exploration and experimentation " +
                    "purposes.",
                photo: "./images/website.gif"
            },
            {
                title: "Browser Landing Page/Startpage",
                source: [
                    {
                        title: "Source Code",
                        url: "https://github.com/aishr/uni-startpage"
                    }
                ],
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
                source: [
                    {
                        title: "FE Source",
                        url: "https://github.com/nhamlv-55/spacer-visualization"
                    },
                    {
                        title: "BE Source",
                        url: "https://github.com/aishr/SpacerVisBackend"
                    },
                    {
                        title: "Prose Source",
                        url: "https://github.com/aishr/SpacerProseBackend"
                    }
                ],
                description: "Inspired by a saturation visualizer for Vampire, this visualizer depicts SPACER's " +
                    "exploration tree.",
                photo: "./images/spacervisualizer.gif"
            },
            {
                title: "Spacer Dashboard",
                source: [
                    {
                        title: "Source Code",
                        url: "https://github.com/aishr/spacer-visualization/tree/master/visualization-frontend/src/components/DashboardComponents"
                    }
                ],
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
                <Project
                    title="Personal Projects"
                    projects={this.personalProjects}
                />
                <Project
                    title="Course Projects"
                    projects={this.courseProjects}
                />
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
