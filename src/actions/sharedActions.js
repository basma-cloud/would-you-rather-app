import {addQuestionCreator} from '../actions/addQuestionCreator'
import {addQuestionsToStateCreator} from '../actions/addQuestionsToStateCreator'
import {addUsersToStateCreator} from '../actions/addUsersToStateCreator'
import {addQuestionToUserCreator} from '../actions/addQuestionToUserCreator'
import {addAnswerToQuestionCreator} from "../actions/addAnswerToQuestionCreator"
import {addAnswerToUserCreator} from "../actions/addAnswerToUserCreator"
import {getAllInitialData} from '../apis/api'
import { saveQuestion } from '../apis/api'
import { _saveQuestionAnswer } from '../_DATA'

export function receiveDataToStore() {
   return dispatch =>{
      return getAllInitialData().then(({ users , questions}) =>{
      dispatch(addQuestionsToStateCreator(questions));
      dispatch(addUsersToStateCreator(users))
       })
    }
  
}



export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestionCreator(question));
        dispatch(addQuestionToUserCreator(question,author));
      }
    );
  };
}





export function handleAddAnswer(authedUser, qid, answer) {
  console.log(authedUser)
  return dispatch => {
    dispatch(addAnswerToUserCreator(authedUser, qid, answer));
    dispatch(addAnswerToQuestionCreator(authedUser, qid, answer));

    return _saveQuestionAnswer(authedUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}

    
  