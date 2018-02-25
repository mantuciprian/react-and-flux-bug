var React=require('react');
//var Mercury=require('./components/planets/mercury');
var MainComponent=require('./main');

import {Router,Route, browserHistory,Link} from 'react-router';
var App = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={MainComponent}></Route> 
                
            </Router>
            )
    }

});
module.exports=App;