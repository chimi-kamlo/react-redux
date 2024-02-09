
import { GET_TACHE,ADD_TACHE,DELETE_TACHE } from "../actions/tache.action";

const initialState ={};
export default function tacheReducer(state=initialState,action){

    switch(action.type){
        case GET_TACHE:
            return action.payload;
            case ADD_TACHE:
                return [...state,action.payload];
            case  DELETE_TACHE:
                return state.filter((tache)=>{tache.id!==action.payload})  ; 
            default:
                return state;
    }
}