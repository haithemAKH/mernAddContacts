import { combineReducers } from "redux";
import contactReducer from "./Contact";
import userReducer from "./user";


const rootReducer = combineReducers({contactReducer,userReducer})

export default rootReducer