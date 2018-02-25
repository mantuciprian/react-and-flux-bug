import React from 'react';
import axios from 'axios';
import {Router,Route, browserHistory,Link} from 'react-router';
require('./css/newsList.css')
var NewsList=React.createClass({
    getInitialState(){
return{
    news:[],
    
}
    },
componentDidMount(){
axios.get('https://content.guardianapis.com/search?q=debates&api-key=test')
.then((results)=>{
var newsList=results.data.response.results;
console.log(newsList[0].webTitle);
    this.setState({
        news:newsList
    });
  
});
},
    render(){
        
    var newsList=this.state.news;
    newsList=newsList.map((item,index)=>{
return(<li key={index} className='well well-sm'><Link to={'/detail/' + index  }>{item.webTitle}</Link> <span className='moveRight'>{item.webPublicationDate}</span></li>)
    })
    return(
<div className='container'>
   
    <ul className='list'>{newsList}</ul>



</div>
    );
},

});
module.exports=NewsList;