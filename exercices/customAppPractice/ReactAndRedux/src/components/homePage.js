"use strict";

var React = require('react');
var Router=require('react-router');
var Link=Router.Link;
var ImageMapper = require('react-image-mapper'); 

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
<div className="row">
			<div className="col-sm-3">
				<ul className="nav">
					<div>List of Panets</div>
                <li><Link to="sun">Sun</Link></li>
                <li><Link to="authors">Ars</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
            </div>
      
	 
	 <div className="col-sm-9">
     <img src="images/solar.jpg"  useMap='planet'  />
	 <map name="#planet">
	 <Link to="sun"> <area shape="circle" coords="550,220,145" alt="Sun"  /></Link>
	 </map>
	 </div>
	 
	 </div>
	 
	 </div>
			
		);
	}
});

module.exports = Home;
