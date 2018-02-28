import React from 'react';

class About extends React.Component {
    render() {
        return (
           <div>
                <h3>Publications</h3>
                    <ul className="about-list">
                        <li>Zehra, S., Ramanathan, A., Zhang, L. Y., and Zingaro, D. Student
                            Misconceptions of Dynamic Programming. In Proceedings of the 49th ACM
                            Technical Symposium on Computer Science Education (SIGCSE '18).</li>
                    </ul>
                <h3>Course Projects</h3>
                    <ul className="about-list">
                        <li>Humour Detector</li>
                        <p>This project was written in Python and uses a Naive Bayes Classifier trained and tested with an online corpus of jokes</p>
                        <li>Java Shell (JShell)</li>
                        <li>Scene Classification, Facial Detection & Gender Classification</li>
                        <li>ML to Python Transpiler</li>
                        <li>Project Snowday</li>
                    </ul>
                <h3>Personal Projects</h3>
                    <ul className="about-list">
                        <li>Colour Detector</li>
                        <li>Deerhunt Website</li>
                        <li>Personal Website</li>
                        <li>
                            <a href="https://aishr.github.io/everyday-startpage">
                            Personal Startpages
                            </a>
                        </li>
                    </ul>
            </div>
        );
    }
}

About.displayName = 'About';
export default About; 
