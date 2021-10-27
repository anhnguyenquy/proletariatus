import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  "drop-down-menu": {
    height: "2rem",
    width: "16rem",
    "& .accordion-summary": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      border: "1px solid red",
      height: "1rem",
      "& .typography": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: "1px solid red",
      },
      "& .fa-home": {
        color: "#888089",
        marginRight: "0.5rem",
        fontSize: "1.2rem",
      },
      "& .home-text": {
        color: "#888089",
        fontFamily: "Montserrat",
      },
    },
    "& .accordion-details": {
      "& .typography": {},
    },
  },
});
