import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(()=> ({
    container : {
       display : "flex",
       flexDirection : "row",
       "@media(max-width : 370px)" : {
        flexDirection :  "column"
      }
    },
    appBar: {
        borderRadius: 15,
        margin : '30px 0',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        "@media(max-width : 400px)" :{
          "font-size" : "30px"
        }
      },
      image: {
        marginLeft: '15px'
      },
})) ;