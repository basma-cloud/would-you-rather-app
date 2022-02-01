import {SET_AUTHER_USER} from "../actions/createSetAutherUser" 
 const initialData = {autherUser:{id:null}}
export default function setAUtherUser (state = initialData , action){
    if(action.type === SET_AUTHER_USER ){
      console.log(action)
        const autherUser = action.autherUser
        return{
            ...state,
            
                autherUser:{id: action.id, ...autherUser},
                            
}
    }
  return state
}