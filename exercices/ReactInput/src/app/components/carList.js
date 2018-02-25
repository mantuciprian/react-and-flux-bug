import React from 'react';
var count=0;

class CarList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            complete:false,
            uncompleted:this.props.uncompleted
        }
    }
    
    render(){
        return(
        <div>
            
        <ul>
            <li className={this.state.uncompleted?'uncompleted':'completed'}><span onClick={this.completed.bind(this)} className={this.state.complete?'proba':''}>{this.props.cars}</span> <span className='badge' onClick={this.handleDelete.bind(this)}>X</span></li>
        </ul>
        </div>
       
    )
    };
    handleDelete(){
        this.props.onDelete(this.props.cars);
        //console.log(this.state.complete)
    };
    completed(){
       this.setState({
           complete:!this.state.complete
       });
       this.setState({
        uncompleted:!this.props.uncompleted
       })
       console.log(this.props.uncompleted)
    }
    

}
module.exports=CarList;