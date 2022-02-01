import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'

class LoginUser extends Component {
handleClick = () =>{
    const id = this.props.id
    const handleLogin = this.props.handleLogin
    handleLogin(id)
}
   render(){
      //const user =this.props.user
       return(
        
           <div>
          
               <img alt="" src={this.props.user.avatarURL}/>
               <h4>{this.props.user.name}</h4>
               <button
               onClick={this.handleClick}
               >Login
               </button>
           </div>
       )
   }
}

 

function mapStateToProps(state,props){
  const id = props.id
  const  {users} = state
    const user = users[id]
    return{
        user
    }
}

export default compose(connect(mapStateToProps))(LoginUser)