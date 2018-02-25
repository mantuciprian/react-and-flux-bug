import React from 'react';
import Header from './header';
import axios from 'axios';
import {Router,Route, browserHistory,Link} from 'react-router';
require('./css/newsDetail.css')
var NewsDetail=React.createClass({
    getInitialState(){
return{
    newsDetail:[]
}
    },
    componentDidMount(){
        axios.get('https://content.guardianapis.com/search?q=debates&api-key=test')
        .then((results)=>{
            var newsList=results.data.response.results[this.props.params.id];
            this.setState({
                newsDetail:newsList
            });
            console.log(this.state.newsDetail.webTitle)
        });
    },
    render(){
       
        return(
            <div>
<Header/>
<div className='container'>
<div className='panel-group'>

<div className='panel panel-primary'>
<div className='panel-heading'><span className=''>{this.state.newsDetail.webTitle}</span></div>
<div className='panel-body'><h4><a href={this.state.newsDetail.webUrl}><span className='theLink'>{this.state.newsDetail.webUrl}</span></a></h4></div>
<div className='panel-footer'>{this.state.newsDetail.webPublicationDate} <span className='right'>{this.state.newsDetail.sectionName}</span></div>
</div>

</div>
</div>

            </div>
        );
    }
});
module.exports=NewsDetail;
