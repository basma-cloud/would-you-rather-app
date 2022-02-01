import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Switch ,Route} from 'react-router-dom'

class Protectedroute extends Component {
const isAuthenticated = Object.entries(this.props.autherUser).length !== 0 

console.log(isAuthenticated)
render(){
   const project = (this.props.Component , this.props.path) => {
     <Route
       path={path}
       render={(props)=>
       isAuthenticated ? <Component {...props} />: <Redirect to="/" />
       }
     />
   }
  return(
    {project()}
  )
  
 }
}

function mapStateToProps({setAutherUser}){
  const autherUser = setAutherUser.autherUser.id
    return {
      autherUser
    }
  }

export default connect(mapStateToProps)(Protectedroute)