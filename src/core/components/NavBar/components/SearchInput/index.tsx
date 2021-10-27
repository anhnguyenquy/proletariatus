import { CSSProperties } from "react";
import { ReactComponent as GoogleIcon } from "../../../media/icons/google.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";
import { FaFlag } from "@react-icons/all-files/fa/FaFlag";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { FaCog } from "@react-icons/all-files/fa/FaCog";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useStyles } from "./style";

export const SearchInput = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Paper component='form' className={classes["search-input"]}>
      <IconButton className='icon-button' type='submit' aria-label='search'>
        <SearchIcon />
      </IconButton>
      <InputBase
        className='input-base'
        placeholder='Search ...'
        spellCheck={false}
      />
    </Paper>
  );
};
