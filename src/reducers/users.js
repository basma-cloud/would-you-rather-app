
import { ADD_USERS_TO_STATE } from "../actions/addUsersToStateCreator";
import { ADD_QUESTION_TO_USER } from "../actions/addQuestionToUserCreator";
import {ADD_ANSWER_TO_USER} from "../actions/addAnswerToUserCreator"

export default function users(state = {}, action){
  switch (action.type)
  {
    case ADD_USERS_TO_STATE :
    return {
      ...state,
      ...action.users
    }


    case ADD_QUESTION_TO_USER :
    return {
      ...state,
      [action.author]: {
        
        ...state[action.author],
        questions: state[action.author].questions.concat([action.question.id])
      }
    }


    case ADD_ANSWER_TO_USER :
    return {
      ...state,
      [action.autherUser]: {
          ...state[action.autherUser],
          answers: {
          ...state[action.autherUser].answers,
          [action.questionId ]: action.answer
          }
        }
      }

    default :
      return state
  }
}
