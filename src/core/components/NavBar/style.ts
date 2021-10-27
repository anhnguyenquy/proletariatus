import { makeStyles } from "@mui/styles";

export interface Props {
  current:
    | "default"
    | "friends"
    | "pages"
    | "profile"
    | "notifications"
    | "settings";
}

export const useStyles = makeStyles({
  "nav-bar": {
    width: "100%",
    height: "8%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    "& .google-icon": {
      width: "1.5rem",
      height: "1.5rem",
      marginLeft: "5rem",
      marginRight: "2rem",
    },
    "& .left-icons": {
      display: "flex",
      width: "5rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "1rem",
      marginRight: "13rem",
      "& .icon-container": {
        width: "5vh",
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .fa-user-friends": {
          color: "#888089",
          fontSize: "1.3rem",
        },
        "& .fa-flag": {
          color: "#888089",
          fontSize: "1rem",
        },
      },
    },
    "& .right-icons": {
      display: "flex",
      width: "8rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "1rem",
      marginRight: "13rem",
      "& .icon-container": {
        width: "5vh",
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .fa-user-circle": {
          color: "#888089",
          fontSize: "1.3rem",
        },
        "& .fa-bell": {
          color: "#888089",
          fontSize: "1.3rem",
        },
        "& .fa-cog": {
          color: "#888089",
          fontSize: "1.3rem",
        },
      },
    },
  },
});
