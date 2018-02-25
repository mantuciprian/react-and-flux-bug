//var React=require('react');
import React from 'react' ;
import {Router,Route, browserHistory,Link} from 'react-router';
require('./css/header.css')
class Header extends React.Component{
    render(){
        return(
            <div className='navbar navbar-inverse'>
           <Link to='/'> <h3>Input Practice</h3></Link>
            </div>
        )
    }
};
module.exports= Header;