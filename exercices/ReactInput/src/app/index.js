'use strict'
var React = require('react');

var ReactDOM = require('react-dom');

import {Router,Route, browserHistory,Link} from 'react-router';
var App=require('./route');



ReactDOM.render(<App />, document.getElementById('output'));
