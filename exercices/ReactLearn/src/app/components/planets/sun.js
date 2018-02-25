var React=require('react');
var Header=require('../../components/header');
var Sun=React.createClass({
    render(){
        return(<div>
       
            <Header/>
           
           
            <div className="container">
   <div className='page-header'><h2>Sun</h2></div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner">
      <div className="item active">
          
        <img src="./images/sun1.jpg" alt="Sun1" width='100%' />
      </div>

      <div className="item">
        <img src="./images/sun2.jpg" alt="Chicago" width='100%' />
      </div>
    
      <div className="item">
        <img src="./images/sun3.jpg" alt="New york" width='100%' />
      </div>
    </div>

    
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
<div className='container'>
<div className='page-header'>
    <h2>Description</h2>
    </div>
    <p className='well'>
        The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma,
        with internal convective motion that generates a magnetic field via a dynamo process.
        It is by far the most important source of energy for life on Earth. Its diameter is about 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System.
        About three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.

    </p>
</div>

            </div>
           
            );
    }
});
module.exports=Sun;