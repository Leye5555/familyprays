import axios from "axios";

const url = "https://onoapp.herokuapp.com/posts";

export const fetchPosts = async () => await axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);

export const deletePost = (_id) => axios.delete(`${url}/${_id}`);

