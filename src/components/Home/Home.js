import React,{useEffect, useState} from "react";
import {Container, Grow, Grid} from "@material-ui/core"
import Posts from "../Posts/posts.js";
import Form from "../Form/form.js";
import {getPosts} from "../../actions/posts";
import { useDispatch } from "react-redux";
import makeStyles from "./styles.js";

const Home = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const classes = makeStyles();
   const dispatch = useDispatch();

   useEffect(() => {
       dispatch(getPosts())
   },[currentId,dispatch]);

   return(
    <Grow in>
                <Container >
                    <Grid className = {classes.container} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid className = {classes.posts} item xs={12} sm={7}>
                            <Posts  setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form  currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
          </Grow>

   )

}

export default Home;