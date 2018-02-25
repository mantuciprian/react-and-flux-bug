var React=require('react');
var Experience=React.createClass({
   
    render(){
        var userList=this.props.users;
        userList=userList.map((item,index)=>{
            return(
              
                <li className='list-group-item' key={index}>
                    <label>
                        {item.name}

                        </label>
                        <br/>
                        <p>{item.exp}</p>

                    </li>
                    
            )
        })
        return(
<div className='well'>
    <h4>User Experience</h4>
    <ul className='list-group'>
        {userList}
    </ul>
    <form onSubmit={this.handleSubmit}>
       <label>Name:</label> <input type='text' ref='newUser' className='form-control'  />
       <br/>
       <label>Experience:</label>
       <br/>
       <textarea name="message" rows="5" cols="50" ref='userExp' className='form-control' placeholder='Write a few words about your experience'>

</textarea>
<br/>
<input type='submit' value='send' className='btn btn-info' />



    </form>
</div>
        );
    },
    handleSubmit(e){
        e.preventDefault();
        if(this.refs.newUser.value.length > 2 && this.refs.userExp.value.length){
        this.props.onAdd({name:this.refs.newUser.value,exp:this.refs.userExp.value});
        }else if(this.refs.newUser.value.length < 2 || !this.refs.newUser.value.length){
            alert('Name length is too short or not filled')

        }else if(!this.refs.userExp.value){
            alert('You must write a few words about your experience!')
        }
        

    }
})
module.exports=Experience;