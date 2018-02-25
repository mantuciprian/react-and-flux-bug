var React=require('react');
var SolarSys=require('./components/solarSys');
var Header=require('./components/header');
var SolarDescription=require('./components/solarDescription');
import Inputs from './components/inputs';

var Experience=require('./components/userExperience/Experience')
require('./css/main.css')
var MainComponent = React.createClass({
    getInitialState(){
        return{
           users:[
                {name:'Alex',exp:'It is quite nice'},
                {name:'Jon',exp:'It could be better'}
        
        ]
       
        
        
        }
        
    },
  render(){
     
     
      return(
         <div>
             
          <Header/>
        
          <div className='container'>
      
              <div >
<Experience users={this.state.users} onAdd={this.onAdd}/>

              </div>
          </div>
          <div><Inputs/></div>
         
         </div>
  )
  },
  onAdd(item){
      var updatedUsers=this.state.users;
      updatedUsers.push(item);
      this.setState({
          users:updatedUsers
      })

  },
  addCar(item){
var updatedCars=this.state.cars;

updatedCars.push(item);
this.setState({
    cars:updatedCars
})
  },
  onDelete(item){
    var updatedCars=this.state.cars.filter((val,index)=>{
        return item !== val;
    });
    this.setState({
        cars: updatedCars
    })
  }
 

});
module.exports=MainComponent;