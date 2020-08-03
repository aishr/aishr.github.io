import React from 'react';
import {Link} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav-container>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
            </nav-container>
        );
    }
}
Nav.displayName = "Nav"
export default Nav;