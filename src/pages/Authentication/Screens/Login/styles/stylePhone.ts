import { makeStyles } from "@mui/styles";

export const useStylesPhone = makeStyles({
  login: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    backgroundColor: "#F3F2EF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .app-info": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .app-name": {
        color: "#13AA52",
        fontWeight: "600",
        fontSize: "3rem",
      },
      "& .app-description": {
        marginTop: "1rem",
        marginBottom: "1.5rem",
        maxWidth: "40rem",
        fontSize: "1rem",
        fontWeight: 500,
        textAlign: "center"
      },
    },
    "& .credential-box": {
      backgroundColor: "white",
      width: "20rem",
      height: "17rem",
      borderRadius: "10px",
      boxShadow: "3px 3px #E4E6E6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "1rem",
      "& .login-area": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "0.1rem",
        "& input": {
          border: "1.5px solid #e1e1e1",
          padding: "0.5rem",
          borderRadius: "5px",
          height: "1rem",
          width: "15rem",
          margin: "0.3rem",
          fontSize: "0.8rem",
          textAlign: "center"
        },
        "& input::placeholder": {
          color: "#888089",
          fontWeight: "normal",
          fontStyle: "normal",
          letterSpacing: "0.015rem"
        }
      },
      "& .forgot-password": {
        color: "#16C172",
        marginTop: "0.5rem",
        marginBottom: "1rem",
        fontWeight: "600",
        fontSize: "0.7rem",
        border: "none",
        background: "none",
      },
      "& .forgot-password:hover": {
        color: "#13AA52",
      }
    },
  },
});
