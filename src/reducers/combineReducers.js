import { combineReducers } from 'redux';

import setAutherUser from '../reducers/setAutherUser'
import questions from '../reducers/questions'
import users from '../reducers/users'


export default  combineReducers({    
    users,
    questions,    
    setAutherUser
})