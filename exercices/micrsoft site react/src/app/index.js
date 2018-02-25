'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
 
class Button extends React.Component {
    state = { counter: 0 };
    handleClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter+1

        }))
    };
    render() {
        return (
            <button>
                {this.state.counter}
            </button>
            )

    }
}
ReactDOM.render(<Button/> , document.getElementById('output'))
