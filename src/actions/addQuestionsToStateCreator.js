export const ADD_QUESTIONS_TO_STATE ="ADD_QUESTIONS_TO_STATE"

export function addQuestionsToStateCreator (questions){
   return {
       type:ADD_QUESTIONS_TO_STATE ,
       questions
   }
}
