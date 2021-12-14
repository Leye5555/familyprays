import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Typography,Button, Avatar } from "@material-ui/core";
import  makeStyles  from "./styles.js";
import  memories from "../../images/memories.png";
import {Link} from "react-router-dom"; 
const NavBar = () => {
    const classes = makeStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    console.log(user);
  return (
    <AppBar className = {classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className = {classes.heading} variant = "h3" align="center">
                Family Prayers
            </Typography>
        <img className = {classes.image} src = {memories} alt="memories" height="100" width = "200" />
        </div>
        <Toolbar className = {classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant = "h6" >{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                </div>
            ) : (
                 <Button component={Link} to="/auth" variant="contained" color="primary" >Sign Up</Button>
             )}
        </Toolbar>
   </AppBar>
  )
}

export default NavBar;  