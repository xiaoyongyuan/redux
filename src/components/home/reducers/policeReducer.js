import { combineReducers } from 'redux';
import { POLICE_SELECT,LIST } from "../action/type";
const initialState={
    police:"0",
    list:[]
};
const policeSelect=(state=initialState,action)=>{
    switch(action.type){
        case POLICE_SELECT:
            return {
                ...state,
                police:action.payload
            }
            case LIST:
                return{
                    ...state,
                    list:action.payload
                }
        default:
            return state;
    }
}
export default combineReducers({
    policeSelect
})