import React from 'react';
import Homepage from './homepage.jsx';
import Contact from './contact.jsx';
import About from './about.jsx';
import {Route} from "react-router-dom";

class Router extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <Route exact path={'/'} component={Homepage} />
                <Route path={'/about'} component={About} />
                <Route path={'/contact'} component={Contact} />
            </div>
        );
    }
}

Router.displayName = 'Router';
export default Router;
