var React=require('react');
var Header=require('../../components/header');
var Jupiter=React.createClass({
    render(){
        return(
            
            <div>
                <Header/>
                
                <div className="container">
   <div className='page-header'><h2>Jupiter</h2></div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner">
      <div className="item active">
          
        <img src="./images/jupiter1.jpg" alt="Sun1" width='100%' />
      </div>

      <div className="item">
        <img src="./images/jupiter2.jpg" alt="Chicago" width='100%' />
      </div>
    
      <div className="item">
        <img src="./images/jupiter3.jpg" alt="New york" width='100%' />
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
   
    Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity.
    The Romans named it after their god Jupiter.When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows,
    and making it on average the third-brightest object in the night sky after the Moon and Venus.
    Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules. It may also have a rocky core of heavier elements,
    but like the other giant planets, Jupiter lacks a well-defined solid surface.

    </p>
</div>
                
                </div>
        );
    }
});
module.exports=Jupiter;