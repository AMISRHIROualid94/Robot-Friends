import { CHANGE_SEARCH_FILED }  from './constante.js';

const initialState = {
    searchfiled : ''
}

export  const searchRobots = (state=initialState, action={}) => {
    console.log(new Date(),'searchRobots');
    switch(action.type){
        case CHANGE_SEARCH_FILED :
            return Object.assign({},state,{searchfiled:action.payload})
        default:
            return state;
    }
    
}