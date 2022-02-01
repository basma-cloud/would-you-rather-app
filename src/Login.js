import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import createSetAutherUser from './actions/createSetAutherUser';
import LoginUser from './LoginUser';
import { compose } from 'redux'


class Login extends Component{
   handleLogin = (id) => {
   const dispatch = this.props.dispatch
    dispatch(createSetAutherUser(id))
     
}
  
    render(){
        return(
            <div>
              
               <h2>choose a user to Login</h2>
               <div>
                   {
                       this.props.userIDs.map((id)=>
                         <LoginUser
                         key={id}
                         id={id}
                         handleLogin={this.handleLogin}
                         />
                       )
                   }
               </div>
            </div>
        )
    }
}



function mapStateToProps(state){
  console.log(state)
  const  {users} = state
    return{
    userIDs : Object.keys(users)
    }
}

export default compose(connect(mapStateToProps))(Login)