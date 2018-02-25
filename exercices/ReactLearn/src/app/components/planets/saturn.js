var React=require('react');
var Header=require('../../components/header');
var Saturn=React.createClass({
    render(){
        return(
            <div>
                <Header/>

                <div className="container">
   <div className='page-header'><h2>Saturn</h2></div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner">
      <div className="item active">
          
        <img src="./images/saturn1.jpg" alt="Sun1" width='100%' />
      </div>

      <div className="item">
        <img src="./images/saturn2.jpg" alt="Chicago" width='100%' />
      </div>
    
      <div className="item">
        <img src="./images/saturn3.jpg" alt="New york" width='100%' />
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
   
    Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.
    Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive.
    Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.
    Saturn's interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds). This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally outside the Frenkel line a gaseous outer layer.
    Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. Electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's.
    The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (500 m/s), higher than on Jupiter, but not as high as those on Neptune.
    

    </p>
</div>




            </div>
        )
    }
});
module.exports=Saturn;