var React=require('react');
require('css/sun.css')
var Sun=React.createClass({
render:function(){
return(
    <div className="container jumbotron">
        <h3>Sun</h3>
       <div className="imgWrap">
     <img src="images/sun.jpg" width="500px" height="300px"/>
       </div>
       <div>
          <h3>Description:</h3>
       </div>
    </div>
)

}

});
module.exports = Sun;