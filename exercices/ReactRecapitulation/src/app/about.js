var React = require('react');
import { Link } from 'react-router';
import axios from 'axios';
var About = React.createClass({
    getInitialState() {
        return {
           res: []
        }
    },
    render() {
        var results = this.state.res;
        results = results.map((item, index) => {
            return (<ResultList item={item} key={index}/>)
        })
        return (
            <div>
                <h2>All about me</h2>
                <Link to={'/'}><button>Back</button></Link>
                <div><ul>{results}</ul></div>
                
            </div>
                )
    },
    componentDidMount() {
        axios.get('https://content.guardianapis.com/search?q=debates&api-key=test').then((results) => { this.setState({ res: results.data.response.results }) });
        
    }
});
var ResultList = React.createClass({
    render() {
        return (<li>{this.props.item.id}</li>)
    }
})
module.exports= About;
