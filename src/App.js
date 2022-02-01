import React from 'react';
import { Component } from 'react';
import {receiveDataToStore} from "./actions/sharedActions"
import { connect } from 'react-redux';
import {Switch ,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import UserCard from './UserCard';
import AddPoll from './AddPoll';
import Leaderboard from './LeaderBoard';
import NoMatch from './NoMatch';
import { compose } from 'redux'

class  App extends Component {
  
  componentDidMount(){
    this.props.receiveDataToStore()  
   }

  render(){
    const  autherUser  = this.props.autherUser;
     return(
      <Router>
        <div>
          {autherUser.id == null? (
              <Route 
              render={() => (               
                  <Login />                
               )}
     
              />
            ):(
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/questions/:question_id" component={UserCard} />
              <Route path="/add" component={AddPoll} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path = "/404" component={NoMatch} />
            </Switch>

          )}
        </div>
      </Router>
     )
  }

}

function mapStateToProps({ setAutherUser }) {
  const autherUser = setAutherUser.autherUser
  return {
    autherUser
  };
}
export default compose(connect(mapStateToProps,{receiveDataToStore}))(App);
