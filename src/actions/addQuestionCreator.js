export const ADD_QUESTION = "ADD_QUESTION"

export function addQuestionCreator (question){
    return{
        type:ADD_QUESTION,
        question
    }
}