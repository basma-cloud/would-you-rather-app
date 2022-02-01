import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'

class LeaderBoardItem extends Component{
    render(){
        const name = this.props.user.name
        const answered=this.props.answered
        const questions= this.props.questions
        const score = this.props.score
        const isYou = this.props.isYou

        return(
            <div>
              <img alt="" src={this.props.user.avatarURL}/>
              {name} {isYou ? <p>You</p> : ''}
              <br/>
               <div>
              <p>questions:{questions}</p>
              <p>answered: {answered}</p>
              <p>score:{score}</p>
              </div>
            </div>
        )
    }
}

function mapStateToProps({users,setAutherUser},props){
const id = props.id

const autherUser = setAutherUser.autherUser
const user = users[id]
console.log(user)
const answered=  Object.keys(user.answers).length
console.log(answered)
  

const questions=user.questions.length
const score=answered+questions
const isYou=user.id=== autherUser.id

return{
    user,
    answered,
    questions,
    score,
    isYou
}
}

export default compose(connect(mapStateToProps))(LeaderBoardItem)