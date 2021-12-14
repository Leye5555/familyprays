import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";
import Post from "./post/post.js";
import {useSelector} from "react-redux";
import makeStyles from "./styles";

const Posts = ({setCurrentId}) => {
    const classes = makeStyles();
    const posts = useSelector((state) => state.posts)
    
     return(
        !posts.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container alignItems = "stretch" spacing = {3}>
                 {posts.map((post) => ( /// notice the use of parenthesis instead of curly braces 
                      <Grid key={post._id} item xs = {12} sm = {6}>
                          <Post post = {post}  setCurrentId = {setCurrentId} />
                      </Grid>
                 ))}
            </Grid>
        )
     )
}

export default Posts;

