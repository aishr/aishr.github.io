import React from 'react';
import Homepage from './homepage.jsx';
import About from './about.jsx';
import {Route} from "react-router-dom";
import Nav from "./nav.jsx";

class Router extends React.Component {
    constructor(props){
        super(props);
    }
    
    getPage(pageName) {
        const Page = pageName
        return (
            <page-body>
                <Page />
            </page-body>
        )
    }
    
    render() {
        return (
            <div>
                <Nav/>
                <Route exact path={'/'} render={() => this.getPage(Homepage)} />
                <Route path={'/about'} render={() => this.getPage(About)} />
            </div>
        );
    }
}

Router.displayName = 'Router';
export default Router;
