var React=require('react');
import {Router,Route, browserHistory,Link} from 'react-router';
var SolarSys=React.createClass({
    render(){
        return(
            <div>
                <img src='images/solar.jpg' className='img-thumbnail' useMap='planet'/>
                <map name="#planet">
             <Link to={'/sun'}><area shape="circle" coords="550,220,145" alt="Sun"  /></Link>
             <Link to={'/mercury'}><area shape="circle" coords="320,140,50" alt="Mercury"  /></Link>
             <Link to={'/venus'}><area shape="circle" coords="900,425,50" alt="Venus"  /></Link>
             <Link to={'/earth'}><area shape="circle" coords="460,450,80" alt="Earth"  /></Link>
             <Link to={'/mars'}><area shape="circle" coords="820,600,87" alt="Mars"  /></Link>
             <Link to={'/jupiter'}><area shape="circle" coords="0,400,155" alt="Jupiter"  /></Link>
             <Link to={'/saturn'}><area shape="circle" coords="500,0,45" alt="Saturn"  /></Link>
             <Link to={'/uranus'}><area shape="circle" coords="800,100,52" alt="Saturn"  /></Link>
             <Link to={'/neptune'}><area shape="circle" coords="980,180,45" alt="Saturn"  /></Link>
                </map>
            </div>
        )
    }
});
module.exports=SolarSys;