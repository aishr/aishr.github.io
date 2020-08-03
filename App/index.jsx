import React from 'react'
import ReactDOM from 'react-dom';
import Router from './Components/router.jsx';
import {HashRouter} from "react-router-dom";

class Home extends React.Component {
    render () {
        return (
            <HashRouter>
                <Router/>
            </HashRouter>
        );
    }
}

ReactDOM.render (<Home />, document.getElementById('app'));
