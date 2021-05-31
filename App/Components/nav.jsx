import React from 'react';
import $ from 'jquery'
import {Link} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $("nav ul li").click(function(){

            $(this).addClass("active");
            $("nav ul li").not(this).removeClass("active");
        });
    }
    
    render() {
        return (
            <nav-container>
                <nav>
                    <ul>
                        <Link to={'/'}><li className={window.location.hash === "#/" ? "active" : ""}>Home</li></Link>
                        <Link to={'/about'}><li className={window.location.hash === "#/about" ? "active" : ""}>About</li></Link>
                    </ul>
                </nav>
            </nav-container>
        );
    }
}
Nav.displayName = "Nav"
export default Nav;