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
                            <li data-xcoord="0px" className="active"><a href="/">Home</a></li>
                            <li data-xcoord="160px"><a href="/about">About</a></li>
                            <li data-xcoord="320px"><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </section>
                <div className="restOfPage">
                    {this.props.children}
                </div>
            </div>
	);
    }
}

Nav.displayName = 'Nav';
export default Nav;
