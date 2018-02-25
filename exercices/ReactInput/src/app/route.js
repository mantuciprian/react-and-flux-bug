var React=require('react');
var Mercury=require('./components/planets/mercury');
var MainComponent=require('./main');
var Sun=require('./components/planets/sun');
var Earth=require('./components/planets/earth');
var Venus=require('./components/planets/venus');
var Mars=require('./components/planets/mars');
var Jupiter=require('./components/planets/jupiter');
var Saturn=require('./components/planets/saturn');
var Uranus=require('./components/planets/uranus');
var Neptune=require('./components/planets/neptune');
import {Router,Route, browserHistory,Link} from 'react-router';
var App = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={MainComponent}></Route> 
                <Route path={'/sun'} component={Sun}> </Route>
                <Route path={'/mercury'} component={Mercury}></Route>
                <Route path={'/earth'} component={Earth}></Route>
                <Route path={'/venus'} component={Venus}></Route>
                <Route path={'/mars'} component={Mars}></Route>
                <Route path={'/jupiter'} component={Jupiter}></Route>
                <Route path={'/saturn'} component={Saturn}></Route>
                <Route path={'/uranus'} component={Uranus}></Route>
                <Route path={'/neptune'} component={Neptune}></Route>
            </Router>
            )
    }

});
module.exports=App;