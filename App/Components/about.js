import React from 'react';

class About extends React.Component {
    render() {
        return (
           <div className="about-page">
                <h3>Publications</h3>
                    <ul className="about-list">
                        <p className="citation">Zehra, S., Ramanathan, A., Zhang, L. Y., and Zingaro, D. Student
                            Misconceptions of Dynamic Programming. In Proceedings of the 49th ACM
                            Technical Symposium on Computer Science Education (SIGCSE '18).</p>
                    </ul>
                 <h3>Personal Projects</h3>
                    <ul className="about-list">
                        <li>
			    Colour Detector
			    <a href="https://github.com/aishr/ImageUnderstanding/tree/master/ColourDetector" target="_blank">(Source Code)</a>
			</li>
			<p>Written in Python using OpenCV, this project detects the colour of retail merchandise using frequencies of pixel values. Colours are classified based on 216 web safe colours.</p>
                        <li>
                            Deerhunt Website
                        </li>
                        <p>I worked with a partner to create a website for a Math, Computer Science, and Statistics competition where participants had to solve a series of questions, one per level. Each question solved had to be in a different category from the previous solved question. Some questions were automarked while others took solutions into a queue and were marked manually on an admin dashboard. This project is written with a React JS front end and a .NET Core backend.</p> 
                        <li>
                            Personal Website
                            <a href="https://github.com/aishr/aishr.github.io" target="_blank">(Source Code)</a>
                        </li>
                        <p>Written in React JS, this project was and is for my own exploration and experimentation purposes.</p>
                        <li>
                            <a href="https://aishr.github.io/everyday-startpage" target="_blank">(Website)</a>
                            Personal Startpages
                            <a href="https://github.com/aishr/everyday-startpage" target="_blank">(Source Code)</a>
                        </li>
                        <p>I created a set of startpages for different environments including my workplace, my educational, and my leisure. The example above is my leisure startpage. Each startpage features a icon dock that mimics the OSX application dock. The search bar provided accepts keyboard shortcuts to all labelled links and icons on the page and defaults to google otherwise.</p>
                        </ul>
                <h3>Course Projects</h3>
                    <ul className="about-list">
                        <li>Humour Detector</li>
                        <p>This project was written in Python and uses a Naive Bayes Classifier trained and tested with an online corpus of jokes</p>
                        <li>Scene Classification, Logo Detection, Facial Detection & Gender Classification</li>
			<p>This the final project of CSC420, Image Understanding. It was written in MATLAB. Scene classification was done using edge detection and distance between the edges detected. Gender classification was done using a HOG classifier. Facial Detection was done using DPM. Logo detection was done using RANSAC.</p>
                        <li>ML to Python Transpiler</li>
			<p>Using flex and bison, a partner and I created a lexer and parser for parts of ML syntax that could be viably converted to Python code.</p>
                        <li>Project Snowday</li>
                        <p>In a group of 7 people, we created a online collaborative text editor and code compiler. The text editor supported emacs, vim, and sublime key bindings and the compiler supported</p>
                    </ul>
            </div>
        );
    }
}

About.displayName = 'About';
export default About; 
