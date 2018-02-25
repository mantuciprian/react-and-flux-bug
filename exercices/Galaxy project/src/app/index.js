'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

require('./css/index.css');


import { Router, Route, browserHistory,Link } from 'react-router';

var App = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={MainComponent}> </Route>

            </Router>
        )
    }

});
//components:
var MainComponent = React.createClass({
    render() {
        return (
            <div>
                works
           
             
            </div>
        )
    }
})







ReactDOM.render(<App/>, document.getElementById('output'));
