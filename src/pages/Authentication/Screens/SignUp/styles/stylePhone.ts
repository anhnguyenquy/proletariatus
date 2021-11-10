import { makeStyles } from "@mui/styles";

export const useStylesPhone = makeStyles({
  "sign-up": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
    backgroundColor: "#F3F2EF",
    "& .app-info": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "0rem",
      marginBottom: "1rem",
      "& .app-name": {
        color: "#13AA52",
        fontWeight: "600",
        fontSize: "3.5rem",
      },
      "& .app-slogan": {
        maxWidth: "40rem",
        fontSize: "1.3rem",
        fontWeight: 500,
      },
    },
    "& .credential-box": {
      backgroundColor: "white",
      width: "20rem",
      height: "23rem",
      borderRadius: "10px",
      boxShadow: "3px 3px #E4E6E6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "1rem",
      marginTop: "1.5rem",
      "& input": {
        border: "1.5px solid #e1e1e1",
        padding: "0.5rem",
        borderRadius: "5px",
        width: "15rem",
        height: "1rem", 
        margin: "0.3rem",
        fontSize: "0.8rem",
        textAlign: "center",
      },
      "& input::placeholder": {
        color: "#888089",
        letterSpacing: "0.015rem"
      },
      "& .user-discretion": {
        fontSize: "0.65rem",
        width: "90%",
        marginTop: "1rem",
        textAlign: "center",
        "& span": {
          color: "#16C172",
          fontWeight: 500,
        },
        "& span:hover": {
          color: "#13AA52",
        },
      },
      "& .join-button": {
        marginTop: "1rem",
        borderRadius: "25px",
        padding: "0.2rem",
        textTransform: "none",
        color: "white",
        width: "15rem",
        fontSize: "0.8rem",
        fontWeight: "bold",
        boxSizing: "content-box",
        boxShadow: "none",
        fontFamily: "Montserrat",
        border: "2px solid transparent",
        "&:hover": {
          backgroundColor: "white",
          color: "#13AA52",
          border: "2px solid #13AA52",
        },
      },
      "& .or-section": {
        display: "flex",
        flexDirection: "row",
        width: "17rem",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.7rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      },
      "& .sign-in-prompt": {
          fontWeight: 500,
          fontSize: "0.8rem",
          marginTop: "1rem",
          "& span": {
              color: "#16C172",
          },
          "& span:hover": {
              color: "#13AA52"
          }
      },
    },
  },
});
