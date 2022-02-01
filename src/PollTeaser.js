import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux'

class PollTeaser extends Component{
    render(){
        return(
            <div>
                <h2>Would you rather</h2>
                <p>
                  {this.props.question.optionOne.text}
                  < br />
                  or
                </p>
                <Link to={`/questions/${this.props.id.id}`}>View</Link>
            </div>
        )
    }
}

function mapStateToProps({questions},props){
    const id = props.id
    console.log(id)
    
    console.log(questions)
    const question = questions[id.id]
    console.log(question)
    const optionOne = question.optionOne
    
    return {
      question,
      optionOne
    }
  }

export default compose(connect(mapStateToProps))(PollTeaser)

