import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {handleAddAnswer} from './actions/sharedActions'
import { compose } from 'redux'
import { Link } from 'react-router-dom';


class PollQestion extends Component {


state  = {
  value: ''
}

handleChange = e =>{
   const newState= e.target.value
   this.setState(() => ({
    value:newState
  }))
}

handleSubmit= e =>{
  e.preventDefault()  
  const { autherUser, question, handleAddAnswer } = this.props;
  handleAddAnswer (autherUser,question.id,  this.state.value)
  this.setState(() =>({
    value:''
  }))
}

    render(){
        return(
          <div>
            <h2>Would you rather</h2>
            <form onSubmit={this.handleSubmit}>

              <input
              type="radio"
              id="option1"
              value="optionOne"
              onChange={this.handleChange}
              >
              </input>  
              <label
              htmlFor='optionOne'
              >
              {this.props.question.optionOne.text}
              </label>   



              <input
              type="radio"
              id="option2"
              value="optionTwo"
              onChange={this.handleChange}
              >
              </input>  
              <label
              htmlFor='optionTwo'
              >
              {this.props.question.optionTwo.text}
              </label>    


              <button              
              type='submit'
              disabled={this.state.value === ''}
              >
              Submit
              </button>

            </form>
              <Link to='/' exact >Back</Link>
          </div> 
        )
    }
}

function mapStateToProps ({setAutherUser},props){
  const autherUser =setAutherUser.autherUser.id
  const question = props.question
  console.log(question)
  return{
    question,
    autherUser
  }
}


export default compose(connect(mapStateToProps,{handleAddAnswer}))(PollQestion)