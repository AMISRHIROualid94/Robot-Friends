import { CHANGE_SEARCH_FILED }  from './constante.js';


export const setSearchFiled = (text) => {
    console.log(text);
    return ({
    type : CHANGE_SEARCH_FILED,
    payload : text
})
}
