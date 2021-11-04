import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  "search-input": {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "17rem",
    minWidth: "17rem",
    border: "1px solid #D2D2D2",
    borderRadius: "0 !important",
    marginLeft: "10rem",
    "& .icon-button": {
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      marginLeft: "0.2rem",
      marginRight: "0.2rem",
      "& .search-icon": {
        fontWeight: "bold",
        color: "black",
        fontSize: "1.3rem",
      },
    },
    "& .input-base": {
      ml: 1,
      flex: 1,
      // fontWeight: "500",
      color: "black",
      fontSize: "0.9rem"
    },
  },
});
