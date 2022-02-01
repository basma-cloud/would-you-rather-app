
import { ADD_QUESTIONS_TO_STATE } from "../actions/addQuestionsToStateCreator";
import { ADD_QUESTION } from "../actions/addQuestionCreator";
import {ADD_ANSWER_TO_QUESTION} from "../actions/addAnswerToQuestionCreator"




export default function questions(state = {}, action){
  switch (action.type)
  {
    case ADD_QUESTIONS_TO_STATE :
    return {
      ...state,
      ...action.questions
    }

    case ADD_QUESTION :
    return {
      ...state,
      [action.question.id]: action.question
    }

    case ADD_ANSWER_TO_QUESTION:
    return {
      ...state,
      [action.questionId]: {
        ...state[action.questionId],
        [action.answer]: {
          ...state[action.questionId][action.answer],
          votes: state[action.questionId][action.answer].votes.concat([action.autherUser])
        }
      }
    }


    default :
      return state
  }
}
