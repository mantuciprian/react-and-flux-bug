var React=require('react');
var SolarSys=require('./components/solarSys');
var Header=require('./components/header');
var SolarDescription=require('./components/solarDescription');
var PlanetList=require('./components/planetList');
require('./css/main.css')
var MainComponent = React.createClass({
    getInitialState(){
        return{
            planets:[
                {name:'Sun',adress:'/sun',kind:'star'},
                {name:'Mercury',adress:'/mercury',kind:'planet'},
                {name:'Venus',adress:'/venus',kind:'planet'},
                {name:'Earth',adress:'/earth',kind:'planet'},
                {name:'Mars',adress:'/mars',kind:'planet'},
                {name:'Jupiter',adress:'/jupiter',kind:'planet'},
                {name:'Saturn',adress:'/saturn',kind:'planet'},
                {name:'Uranus',adress:'/uranus',kind:'planet'},
                {name:'Neptune',adress:'/neptune',kind:'planet'}
            ]
        }
        
    },
  render(){
      var planets=this.state.planets;
      planets=planets.map((item,index)=>{
          return(
          <PlanetList item={item} key={index}/>
        )
      })
     
      return(
         <div>
             
          <Header/>
          <SolarDescription/>
          <div className='row'>
              <div className='col-lg-3'>
<ul className="list-group">{planets}</ul>
              </div>
              <div className='col-lg-9'>
<SolarSys/>
              </div>
          </div>
         
         </div>
  )
  }

});
module.exports=MainComponent;