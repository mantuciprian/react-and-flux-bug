'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

var MainComponent = React.createClass({
    //data
    getInitialState() {
        return {
            theCars: [{ name: 'BMW', year: 2000 }, {name:'Mercedes',year:2010}]
        }
    },
    render() {
        var cars = this.state.theCars;
        cars = cars.map(function (val, index) {
            return (<NewCars make={val} key={index} onDelete={this.onDelete} />
            );
            //nested class
        }.bind(this))
        return (
            <div className='container-fluid'>
                <ul className='list-group'>{cars}</ul>
                </div>
            );
    },//render
    //functions:
    onDelete: function (item) {
        var updatedCars = this.state.theCars.filter(function (val, index) {
            return item !== val;
        });
        this.setState({
            theCars: updatedCars
        })
    }

})
var NewCars = React.createClass({
    render() {
        return (<li className="list-group-item"><label>Make: {this.props.make.name}</label> <label> Year: {this.props.make.year}</label> <span className='badge' onClick={this.handleDelete} >X</span></li>)
    },
    handleDelete() {
        this.props.onDelete(this.props.make);
    }
})
ReactDOM.render(<MainComponent />, document.getElementById('output'));
