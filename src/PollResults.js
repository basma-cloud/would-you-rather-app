import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class PollResults extends Component {
    
    render(){
        const vote= this.props.vote
      
        const question= this.props.question
        const numberOfVoteOne=question.optionOne.votes.length
        const numberOfVoteTwo=question.optionTwo.votes.length
        const numberOfVotes= numberOfVoteOne + numberOfVoteTwo
        const percentageQuestionOne = numberOfVoteOne === 0 ? 0 : Math.round((numberOfVoteOne/numberOfVotes)*100);
        const percentageQuestionTwo = numberOfVoteTwo === 0 ? 0 : Math.round((numberOfVoteTwo/numberOfVotes)*100);


        return(
           <div>
               <h2>Results:</h2>
               <h4>Would you rather</h4>
               <br/>
               <h3>{this.props.question.optionOne.text} {vote === 'optionOne' ? (<p> Your choice</p>):<p></p>}</h3>
               {percentageQuestionOne}%
               <progress value={percentageQuestionOne} max="100">{percentageQuestionOne}%</progress>
               <div>{numberOfVoteOne} out of {numberOfVotes} votes</div>

          
               <br/>
               <h3>{this.props.question.optionTwo.text} {vote === 'optionTwo' ? (<p> Your choice</p>):<p></p>}</h3>
               {percentageQuestionTwo}%
               <progress value={percentageQuestionTwo} max="100">{percentageQuestionTwo}%</progress>
               <div>{numberOfVoteTwo} out of {numberOfVotes} votes</div>

               <Link to='/' exact >Back</Link>
            </div>
            
        )
    }
}

export default PollResults