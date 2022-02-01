import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import PollResults from './PollResults'
import PollQuestion from './PollQuestion'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class UserCard extends Component {
    render(){
        const project = () => {

            if(this.props.isAnswered ===true) {                   
             return <PollResults question={this.props.question} vote={this.props.vote}/>
            } else{
             return <PollQuestion question={this.props.question}/>              
            }
        }      
      if(!this.props.question)
  return <Redirect to='/404'/>
        return(

            <div>
              <Nav />
              <img alt='' src={this.props.author.avatarURL} />
              {project()}
            </div>

        )
    }
}

function mapStateToProps({setAutherUser,users, questions},props){
    const autherUser=setAutherUser.autherUser
    
    console.log(autherUser)
    const id = props.match.params.question_id
    console.log(id)
    const question = questions[id];
  if(!question) {
  return {
    question
  }
}
    console.log(question)
    const isAnswered =  question.optionOne.votes.includes(autherUser.id) || question.optionTwo.votes.includes(autherUser.id)? true : false;
  console.log(isAnswered)
    const vote =  question.optionOne.votes.includes(autherUser.id) ? 'optionOne' : 'optionTwo'
    const author = users[question.author]
console.log(author.avatarURL)
  
    return {
      id,
      author ,
  
      question,
      isAnswered,
      vote
    }
 
  
  }
  

export default compose(connect(mapStateToProps))(UserCard)
  



