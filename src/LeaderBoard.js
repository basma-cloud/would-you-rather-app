import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem'
import { compose } from 'redux'
import Nav from './Nav'

class LeaderBoard extends Component {
    render(){
        const orderedUserIds= this.props.orderedUserIds
        return(
            <div>
              <Nav />
               {
                 orderedUserIds.map((id)=>(
                    <LeaderBoardItem
                      id={id}
                      key={id}
                    />
                    
                  ))
        
               }
            </div>
        )
    }
}

function mapStateToProps ({users}){

const userIds = Object.keys(users)
const orderedUserIds= userIds.sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
return{
    orderedUserIds
}
}

export default compose(connect(mapStateToProps))(LeaderBoard)
