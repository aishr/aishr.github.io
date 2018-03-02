import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Components/nav.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Homepage from './Components/homepage.js';

class Home extends React.Component {
    render () {
        return (<h1>Hi</h1>);
    }
}

ReactDOM.render (
    <BrowserRouter>
        <Nav>
            <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} component={Homepage}/>
        <Route path={process.env.PUBLIC_URL + "/about"} component={About}/>
        <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
            </Switch>
        </Nav>
    </BrowserRouter>,
    document.getElementById('app')
);
