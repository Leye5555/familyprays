import { makeStyles } from "@material-ui/core";
export default makeStyles(()=> ({
    container : {
       display : "flex",
       flexDirection : "row",
       "@media(max-width : 370px)" : {
        flexDirection :  "column"
      }
    }
})) ;