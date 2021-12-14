import { combineReducers } from "redux";
import posts from "./posts";
import Auth from "./Auth.js";


export default combineReducers({posts, Auth});