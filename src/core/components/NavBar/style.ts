import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  "nav-bar": {
    width: "100%",
    height: "8%",
    minHeight: "3rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    filter: "drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.25))",
    "& .google-icon": {
      width: "2rem",
      height: "2rem",
      minWidth: "2rem",
      minHeight: "2rem",
      marginLeft: "8rem",
      marginRight: "2rem",
    },
    "& .left-icons": {
      display: "flex",
      height: "100%",
      minWidth: "6rem",
      width: "6rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "2rem",
      marginRight: "0rem",

      "& .icon-container": {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .fa-user-friends": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-flag": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-active": {
          color: "#13AA52 !important",
          textStroke: "1px transparent",
        },
      },
      "& .icon-container-active": {
        borderBottom: "2px solid #13AA52",
      },
    },
    "& .right-icons": {
      display: "flex",
      height: "100%",
      width: "9rem",
      minWidth: "9rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "2rem",

      "& .icon-container": {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& .fa-user-circle": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-bell": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-cog": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
      },
    },
  },
})
