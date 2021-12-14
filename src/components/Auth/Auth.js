import React, {useState}from "react";
import {useDispatch} from "react-redux";
import {Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import {GoogleLogin} from "react-google-login";
import {AUTH} from "../../constants/actionTypes.js"

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import makeStyles from "./styles.js";
import Input from "./Input.js";
import Icon from "./Icon.js"



const Auth = () => {
    const classes = makeStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setSignUp] = useState(false);
    const dispatch = useDispatch();
     const handleSubmit = () => {
     }
     const handleChange = () => {}

     const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
     
     const switchMode =() => {
         setSignUp(() => !isSignUp)
     }

    const googleSuccess =async (res) => {
       const result = res?.profileObj; // without the optional chaining, if there is no res object, then we would get a cannot read profileObj of undefined error message. However with optional chaining we simply get undefined without errors
       const token = res?.tokenId;

       try{
            dispatch({type : AUTH , data: {result, token}});
       }catch(error) {
           console.log(error)
       }
    }
    const googleFailure = (error) => {
       console.log("Google sign in was unsuccessful. Try Again later")
       console.log(error);
    }
    
    return (
       <Container component ="main" maxWidth ="xs">
          <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.avatar} >
                 <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing= {2}>
                       {
                           isSignUp && (
                               <>
                                 <Input name="firstName" label="First Name" handleChange = {handleChange} autoFocus half />
                                 <Input name="firstName" label="First Name" handleChange = {handleChange} half />
                               </>
                           )}
                           <Input name="email" label="Email Address"  handleChange={handleChange} type= "email" />
                           <Input name= "password" label="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}  />
                           { isSignUp && <Input name = "confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                   </Grid>
                   <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                     {isSignUp ? "Sign Up" : "Sign In"} 
                   </Button>
                   <GoogleLogin 
                       clientId = "701733315927-iqg8l9s8g7amqscqjbvgqu2s66c0brt3.apps.googleusercontent.com"
                       render={(renderProps)=> (
                           <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled = {renderProps.disabled} startIcon={<Icon />} variant="contained">
                               Google sign in
                           </Button>
                       )}
                       onSuccess = {googleSuccess}
                       onFailure = {googleFailure}
                       cookiePolicy = "single_host_origin"
                   />
                   <Grid container justify ="flex-end">
                       <Grid item>
                           <Button onClick={switchMode}>
                               {isSignUp ? "Already have an account Sign In" : "Don't have an account sign up"}
                           </Button>
                       </Grid>
                   </Grid> 
              </form>  
          </Paper>
       </Container>
    )
}
export default Auth;