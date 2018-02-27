import React from 'react'
import ReactDOM from 'react-dom';
import Nav from './Components/nav.js'

class Home extends React.Component {
    render() {
        return (
            <Nav />
	);
    }
}

ReactDOM.render(<Home />, document.getElementById('app'));
