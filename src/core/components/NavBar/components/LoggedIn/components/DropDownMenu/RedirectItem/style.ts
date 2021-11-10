import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  "redirect-item": {
    border: "1px solid transparent !important",
    width: "14rem",
    display: "flex",
    justifyContent: "flex-start !important",
    alignItems: "center",
    height: "2.25rem",
    padding: "0 !important",
    margin: "0.1rem !important",
    "& .image-container": {
      //   border: "1px solid red",
      width: "2rem",
      height: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "1rem",
      "& img": {
        // border: "1px solid red",
        width: "1rem",
        height: "1rem",
      },
    },
    "& .icon-object-container": {
      // backgroundColor: "red",
      width: "2rem",
      height: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "1rem",
    },
    "& .button-text": {
      // border: "1px solid red",
      flexGrow: 1,
      height: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      fontWeight: "400",
    //   paddingLeft: "0.1rem",
      textTransform: "none",
      "& .space-title": {
        fontSize: "0.7rem",
        height: '0.7rem',
        color: "black",
        // border: "1px solid red",
        padding: 0,
        display: "flex",
        alignItems: "center"
      },
      "& .space-address": {
        color: "#8A8A8A",
        fontSize: "0.6rem",
        height: '0.6rem',
        // border: "1px solid red",
        padding: 0,
        display: "flex",
        alignItems: "center",
        marginTop: "0.1rem"
      },
    },
  },
});
