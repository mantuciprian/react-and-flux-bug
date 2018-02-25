var React=require('react');
import {Router,Route, browserHistory,Link} from 'react-router';
require('./css/header.css')
var Header=React.createClass({
    render(){
        return(
            <div className='navbar navbar-inverse'>
           <Link to='/'><h3>GuardianNews</h3></Link>
            </div>
        )
    }
});
module.exports= Header;