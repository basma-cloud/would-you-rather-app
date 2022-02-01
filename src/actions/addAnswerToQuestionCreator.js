
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION"

export function addAnswerToQuestionCreator (autherUser,questionId ,answer ){
   return{
       type:"ADD_ANSWER_TO_QUESTION",
       questionId,
       answer,
       autherUser
    }
}

