import React from 'react' ;
import Header from'./components/header';
import NewsList from './components/newsList';
require('./css/main.css')
var MainComponent = React.createClass({
   
  render(){
    
     
      return(
         <div>
             <Header/>
<NewsList/>
         
         </div>
  );
  }

});
module.exports=MainComponent;