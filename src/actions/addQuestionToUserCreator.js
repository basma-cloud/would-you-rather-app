export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"

export function addQuestionToUserCreator (question,author){
 return {
     type :ADD_QUESTION_TO_USER ,
    question,
    author
 }
}