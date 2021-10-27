import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  "search-input": {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "18rem",
    marginRight: "2rem",
    "& .icon-button": {
      p: "10px",
      height: "2rem",
    },
    "& .input-base": {
      ml: 1,
      flex: 1,
    },
  },
});
