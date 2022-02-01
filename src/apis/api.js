import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA';

  

  export function getAllInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
        users,
        questions
      })
    );
  }
export function saveQuestion(question) {
	return _saveQuestion(question);
}

export function saveQuestionAnswer(info) {
	return _saveQuestionAnswer(info);
}

export const isAuthenticated = () => Object.entries(this.props.autherUser).length !== 0
  