var React = require('react');
require('./css/newCars.css');
var CarsList = React.createClass({
    render() {
        return (
            <li onClick={this.clicked}>
                <div className='todo-item'>
            <span className='todo-name'>{this.props.makes}</span>
            <span className='item-remove' onClick={this.handleDelete}>X</span>
                    </div>
            </li>
        )
    },//functions
    handleDelete() {
        this.props.onDelete(this.props.makes)

    }

});
module.exports = CarsList;