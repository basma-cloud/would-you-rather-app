import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from './actions/sharedActions';
import { compose } from 'redux'
import Nav from './Nav'
import { Link } from 'react-router-dom';



class AddPoll extends Component{
    state = {
        optionOne : '',
        optionTwo : '',
        poll : 'true'
      }

    handleChangeOption1 = (e) => {
        const optionOne = e.target.value
        this.setState(() => ({
          optionOne 
        }))
      }

     handleChangeOption2 = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo
        }))
      }    

      handleSubmit = (e) => {
        e.preventDefault()
        const option1 = this.state.optionOne
        const option2 = this.state.optionTwo
        const autherUser = this.props.autherUser
      //  const handleSaveQuestion=this.props.handleSaveQuestion
  
        this.setState({
          optionOne : '',
          optionTwo : '',
          poll : 'false'
        })
         this.props.handleSaveQuestion(option1,option2,autherUser)
        
      }

    render(){
        const optionOne = this.state.optionOne
        const optionTwo = this.state.optionTwo
        const poll = this.state.poll

     
    
        return(           
           
            <div>
          { poll === 'false' ?  
           
           ( <Redirect to="/" />
           
           ):(
          <div>
             <Nav/>
             <h2>add new poll</h2>
             <h4>would you rather </h4>
              <form onSubmit={this.handleSubmit} >
                <input 
                type="text"
                value={optionOne}
                onChange={this.handleChangeOption1}
                />
                <input
                type="text"
                value={optionTwo}
                onChange={this.handleChangeOption2}
                />
                <button
                type='submit'
                disabled={(optionOne === '' || optionTwo === '')}>
                Submit
                </button>

              </form>
              <Link to='/home' exact >Back</Link>
         </div>
               )}
            </div>
         
          
    )
  }
}


function mapStateToProps({setAutherUser}){
  const autherUser = setAutherUser.autherUser.id
    return {
      autherUser
    }
  }
  

export default compose(connect(mapStateToProps,{ handleSaveQuestion }))(AddPoll)