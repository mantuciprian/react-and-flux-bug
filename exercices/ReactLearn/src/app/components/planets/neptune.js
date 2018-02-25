var React=require('react');
var Header=require('../../components/header');
var Neptune=React.createClass({
    render(){
        return(
            <div>
                <Header/>
               
                <div className="container">
   <div className='page-header'><h2>Neptune</h2></div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner">
      <div className="item active">
          
        <img src="./images/neptune1.jpg" alt="Sun1" width='100%' />
      </div>

      <div className="item">
        <img src="./images/neptune2.jpg" alt="Chicago" width='100%' />
      </div>
    
      <div className="item">
        <img src="./images/neptune3.jpg" alt="New york" width='100%' />
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
   
    Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.
    Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.
    Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. Neptune was subsequently observed with a telescope on 23 September 1846
    by Johann Galle within a degree of the position predicted by Urbain Le Verrier.
    

    </p>
</div>
            
            </div>
        )
    }
});
module.exports=Neptune;