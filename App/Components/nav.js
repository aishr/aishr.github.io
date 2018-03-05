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
                <nav-container>
                    <nav>
                        <ul>
                            <li onClick={this.handleHomeClick.bind(this)} className="active">Home</li>
                            <li onClick={this.handleAboutClick.bind(this)}>About</li>
                            <li onClick={this.handleContactClick.bind(this)}>Contact</li>
                        </ul>
                    </nav>
                </nav-container>
                <page-body>
                    {this.state.home && <Homepage />}
                    {this.state.about && <About />}
                    {this.state.contact && <Contact />}
                </page-body>
            </div>
	);
    }
}

Nav.displayName = 'Nav';
export default Nav;
