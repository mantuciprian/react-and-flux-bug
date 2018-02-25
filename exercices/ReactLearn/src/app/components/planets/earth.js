var React=require('react');
var Header=require('../../components/header');
var Earth=React.createClass({
render(){
    return(
        <div>
            <Header/>
            

            <div className="container">
   <div className='page-header'><h2>Earth</h2></div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner">
      <div className="item active">
          
        <img src="./images/earth1.jpg" alt="Sun1" width='100%' />
      </div>

      <div className="item">
        <img src="./images/earth2.jpg" alt="Chicago" width='100%' />
      </div>
    
      <div className="item">
        <img src="./images/earth3.jpg" alt="New york" width='100%' />
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
    Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago. 
    Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times. 
    Earth's axis of rotation is tilted, producing seasonal variations on the planet's surface.
    The gravitational interaction between the Earth and Moon causes ocean tides, stabilizes the Earth's orientation on its axis, and gradually slows its rotation. Earth is the densest planet in the Solar System and the largest of the four terrestrial planets.

    </p>
</div>


        </div>
    )
}

});
module.exports=Earth;