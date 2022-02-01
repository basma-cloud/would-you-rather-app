export const ADD_USERS_TO_STATE ="ADD_USERS_TO_STATE"

export function addUsersToStateCreator (users){
   return {
       type:ADD_USERS_TO_STATE,
       users
   }
}