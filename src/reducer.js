import { CHANGE_SEARCH_FILED }  from './constante.js';

const initialState = {
    searchfiled : ''
}

export  const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FILED :
            return {searchfiled:action.payload}
        default:
            return state;
    }
    
}