import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PollTeaser from './PollTeaser';
import Nav from './Nav';
import { compose } from 'redux'

class Home extends Component {
  // const {unanswered} = this.props
  state = { questions:'unanswered'}
  
  toggleState =(e) =>{
    e.preventDefault()
   const toggle = e.target.getAttribute('data-toggle')
    if(toggle){
       this.setState(()=>({
         questions:toggle
       }))
    }
  }


  render(){

    const answered = this.props.answered
    const unanswered = this.props.unanswered
    const name = this.props.name

        return(
            <div>
                <Nav />   
          {name}
                <button
                type='button'
                onClick = {this.toggleState}
                data-toggle='unanswered'
                >
                 Unanswered
                </button>

                <button
                type='button'
                onClick = {this.toggleState}
                data-toggle='answered'
                >
                 answered
                </button>
               

              { 
              this.state.questions === 'unanswered' ?(

              <div >
                {unanswered.map((id)=>(
                <PollTeaser key={id.id} id={id}/>
                ))}
              </div>  

              ):(

              <div >
                {answered.map((id)=>(
                  <PollTeaser key={id.id} id={id}/>
                ))}
              </div>     

              )                                                        
              }
          </div>
        )
    }
}


function mapStateToProps({ setAutherUser, users, questions }) {
    const autherUser = setAutherUser.autherUser
    const name =autherUser.id
   
      
    const answeredIds = Object.keys(users[autherUser.id].answers);

    const answered = Object.values(questions)
      .filter(question => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);


    const unanswered = Object.values(questions)
      .filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

      return {      
          answered,
          unanswered ,
          name
      };
}

export default compose(connect(mapStateToProps))(Home)