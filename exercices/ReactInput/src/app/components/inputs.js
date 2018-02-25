import React from 'react';

require('.././components/css/header.css')

class Inputs extends React.Component{
   constructor(props,context){
    super(props,context);
    this.state={
        cars:[{name:'BMW',completed:false,uncompleted:true},{name:'Mercedes',completed:false,uncompleted:true}]
    
    }
   };
    render(){
       var cars=this.state.cars;
       cars=cars.map((item,index)=>{
           return(
               <CarList item={item} key={index} completed={this.state.completed} check={this.checkItem.bind(this)}/>
//<li key={index} ><span className={this.state.completed?'proba':''} onClick={this.checkItem.bind(this)}>{item}</span></li>

           );

       })
        return(
            <div className='container'> 
                <h4>Input practice</h4>
            
                <form onSubmit={this.handleAdd.bind(this)}>
                    <input type='text' ref='car'/>
                    <input type='submit' value='add' />
                    <br/>
                    <input type='button' value='completed' onClick={this.checkItem.bind(this)}   />
                    <input type='button' value='uncompleted' />
                    <input type='button' value='all' />
                </form>
                <div>
                    <h4>List of cars</h4>
                    
                       <ul> {cars}</ul>
                    
                </div>
            </div>
        );
    };
    //add cars to the list:
    addItem(item){

        var updatedCars=this.state.cars;
        updatedCars.push(item);
        this.setState({
            cars:updatedCars
        })

    };
    handleAdd(e){
        e.preventDefault();
        
        var carName=this.refs.car.value;
        if(carName.length>2){
            this.addItem(carName)
        }

       // this.addItem(carName)
       console.log(carName)

    };
    //set compete/incomplete item:
checkItem(){
    this.setState({
        completed:!this.state.completed
    })
}
showCompleted(){
this.setState({
    completed:true
});
console.log('complete show')
}

// 
};
//secondClass
class CarList extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
render(){
    return(
        <li><span onClick={this.check} className={this.props.completed?'proba':''}>{this.props.item}</span></li>
    );
};
//check
check(){
  this.pr