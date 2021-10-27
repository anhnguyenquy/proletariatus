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
import { DropDownMenu, SearchInput } from "./components"
import { useStyles, Props } from "./style";

export const NavBar = (props: Props): JSX.Element => {
  const classes = useStyles(props);
  return (
    <div className={classes["nav-bar"]}>
      <GoogleIcon className='google-icon' />
      <DropDownMenu/>
      <div className='left-icons'>
        <div className='icon-container'>
          <FaUserFriends className='fa-user-friends' />
        </div>
        <div className='icon-container'>
          <FaFlag className='fa-flag' />
        </div>
      </div>
      <SearchInput />
     {/*  */}
      <div className='right-icons'>
        <div className='icon-container'>
          <FaUserCircle className='fa-user-circle' />
        </div>
        <div className='icon-container'>
          <FaBell className='fa-bell' />
        </div>
        <div className='icon-container'>
          <FaCog className='fa-cog' />
        </div>
      </div>
    </div>
  );
};
