import React from 'react';
import NewsDetail from './components/newsDetail';
//var Mercury=require('./components/planets/mercury');
var MainComponent=require('./main');

import {Router,Route, browserHistory,Link} from 'react-router';
var App = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={MainComponent}></Route> 
                <Route path={'detail/:id'} component={NewsDetail}></Route> 
            </Router>
            )
    }

});
module.exports=App;