import {
    GET_CONTACT,
    GET_CONTACTS,
    LOAD_CONTACTS 
} from "../ActionTypes/Contact";
const initialState ={
    listContacts :[],
    error : null,
    load : false ,
    contactToGet : {},
};
//pure function
const contactReducer =(state= initialState,{type , payload})=>{
    switch (type){
        case LOAD_CONTACTS:
        return {...state,load:true};
        
        case GET_CONTACTS:
        return{...state,load :false,listContacts:payload.listContacts};
        
        case GET_CONTACT:
        return {...state,load:false,errors:payload};
        
        default :
        return state;
    }
};
export default contactReducer;