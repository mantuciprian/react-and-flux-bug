var React=require('react');
require('./css/planetList.css')
import {Router,Route, browserHistory,Link} from 'react-router';

var PlanetList=React.createClass({
    render(){
        return(
            <Link to={this.props.item.adress}><li className="list-group-item">
                <h4 className="list-group-item-heading">{this.props.item.name}</h4>
                <p>{this.props.item.kind}</p>
                </li></Link>
        )
    }
});
module.exports=PlanetList;