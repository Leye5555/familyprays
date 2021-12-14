import {CREATE, UPDATE, FETCH_ALL, DELETE} from "../constants/actionTypes"
import * as api from "../api/index";

export const getPosts = () => async (dispatch) => {
    try {
          const { data } = await api.fetchPosts();
          dispatch({type : FETCH_ALL, payload : data})
    }
    catch(error) {console.log(error.message)}
    
}


export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type : CREATE, payload : data})
    }
    catch(error) {
        console.log(error )
    }
}

export const updatePost = (id, post) => async (dispatch) => {
   try{
      const {data} =  await api.updatePost(id, post); 

       dispatch({type: UPDATE, payload : data})
   }
   catch (error) {
       console.log(error.message);
   }
}




export const deletePost = (_id) => async (dispatch) => {
     
    try {
        if (window.confirm("Do you really want to delete this post as it is irreversible?")){
            // eslint-disable-line
            await api.deletePost(_id) 
            dispatch({type : DELETE, payload : _id})
        }
    }
    catch(error) {
       console.log(error);
    }
}
 

export const likePost = (id) => async (dispatch) => {
    try{
       const {data} =  await api.likePost(id); 
 
        dispatch({type: UPDATE, payload : data})
    }
    catch (error) {
        console.log(error.message);
    }
 }
