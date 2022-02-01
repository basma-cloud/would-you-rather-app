import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import  createSetAutherUser from './actions/createSetAutherUser';
import { Link }from 'react-router-dom';





class Nav extends Component{
    handleLogOut = ()=> {
        const dispatch = this.props.dispatch
        // console.log(this.props.dispatch)
        //e.preventDefault();
       dispatch(createSetAutherUser(null))
                                 
            
    };

    render(){
      const autherUser= this.props.autherUser
        return(
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/leaderboard'  >Leader</Link></li>
                    <li><Link to='/add'  >Add Poll</Link></li>
                    <li><img alt="" src={this.props.users[this.props.autherUser.id].avatarURL}/></li>
                    <li> {autherUser.id} </li>
                   <li>
                   <button
                     onClick={this.handleLogOut}
                     >logOut</button>
                     
                   </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({users,setAutherUser}){
 const autherUser=setAutherUser.autherUser
 
    return {
  
        users,
       autherUser
    }
    
  
}


export default connect(mapStateToProps)(Nav)