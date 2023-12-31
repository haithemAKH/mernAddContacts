import { 
    CLEAR_ERRORS,
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGOUT_USER,
    REGISTER_USER } from "../ActionTypes/user";



    //initialstate
    const initialiState = {
        user : null,
        loadUser:false,
        errors : null,
        isAuth : false
    }


    const userReducer = (state = initialiState,{type,payload})=>{
        switch(type){
            case LOAD_USER:
                return{...state,loadUser:true}
            case REGISTER_USER:
                localStorage.setItem("token",payload.token)
                return{...state,loadUser:false,user:payload.user,isAuth:true}
            case CURRENT_USER:
                return {...state,user:payload,loadUser:false,isAuth:true}
            case LOGOUT_USER:
                localStorage.removeItem("token");
                return{user:null,loadUser:false,errors:null,isAuth:false}
            case FAIL_USER :
                return{...state,loadUser:false,errors:payload}
            case CLEAR_ERRORS:
                return{...state,errors:null}
            default:
                return state;
        }
    }

    export default userReducer;