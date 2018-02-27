import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Homepage from './homepage.js';
import Contact from './contact.js';
import About from './about.js';

class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            home: true,
            about: false,
            contact: false
        }
    }
    componentDidMount(){
        $("nav ul li").click(function(){
        var xcoord = $(this).data("xcoord");

        $(this).addClass("active");
        $("nav ul li").not(this).removeClass("active");
        });
    }
    handleHomeClick(){
        this.setState({
            home: true,
            about: false,
            contact: false
        });
    }
    handleAboutClick(){
        this.setState({
            home: false,
            about: true,
            contact: false
        })
    }
    handleContactClick(){
        this.setState({
            home: false,
            about: false,
            contact: true
        })
    }
    render() {
   	return (
            <div>
                <section>
                    <nav>
                        <ul>
                            <li onClick={this.handleHomeClick.bind(this)} data-xcoord="0px" className="active">Home</li>
                            <li onClick={this.handleAboutClick.bind(this)} data-xcoord="160px">About</li>
                            <li onClick={this.handleContactClick.bind(this)} data-xcoord="320px">Contact</li>
                        </ul>
                    </nav>
                </section>
                <div className="restOfPage">
                    {this.state.home && <Homepage />}
                    {this.state.about && <About />}
                    {this.state.contact && <Contact />}
                </div>
            </div>
	);
    }
}

Nav.displayName = 'Nav';
export default Nav;
