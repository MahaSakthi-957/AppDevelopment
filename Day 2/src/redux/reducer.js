import { combineReducers } from "redux";
const initialstate={
    count:0,
};
function counterReducer(state=initialstate,action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            return{ ...state,count:state.count+1};
        case 'DECREMENET':
            return{...state,count:state.count-1};
            default :
            return state;
    }
}
const rootReducer=combineReducers({
    counter:counterReducer,
});
export default rootReducer;