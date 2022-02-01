export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER"



export function addAnswerToUserCreator (autherUser,questionId ,answer ){
   return{
       type:"ADD_ANSWER_TO_USER",
       questionId,
       answer,
       autherUser
    }
}

