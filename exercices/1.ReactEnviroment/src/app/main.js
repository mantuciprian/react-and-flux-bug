var React=require('react');

var Header=require('./components/header');

require('./css/main.css')
var MainComponent = React.createClass({
   
  render(){
    
     
      return(
         <div>
             
          <Header/>
  <p>working</p>
         
         </div>
  )
  }

});
module.exports=MainComponent;