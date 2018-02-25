'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var CarsList = require('./NewCarsComponent');
require('./css/index.css');
var AddItem = require('./AddItem');
var About = require('./about');
import { Router, Route, browserHistory,Link } from 'react-router';

var App = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={MainComponent}> </Route>
                <Route path={'/about'} component={About}> </Route>
            </Router>
            )
    }

})
//components:

var MainComponent = React.createClass({
    getInitialState() {
        return {
            cars: ['BMW', 'mercedes', 'audi']
        }
    },
    render() {
        var cars = this.state.cars;
        cars = cars.map((item, index) => {
            return (<CarsList makes={item} onDelete={this.onDelete} key={index}/>)
        })
        return (
            <div id='todo-list'>
                <Link to={'/about'}>About cars</Link>
                <ul>{cars}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
            )
            
    },//functions
    onDelete(item) {
        var updatedCars = this.state.cars.filter((val, index) => {
            return item !== val;
        });
        this.setState({
            cars:updatedCars
        })

    },
    onAdd(item) {
        var updatedCars = this.state.cars;
        updatedCars.push(item);
        this.setState({
            cars:updatedCars
        })

    },
    //lifecycle functions
    componentWillMount() {
    console.log('ComponentWillMount')
    },
    componentDidMount() {
        console.log('componentDidMount')

    },
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    
   
})





ReactDOM.render(<App/>, document.getElementById('output'));
