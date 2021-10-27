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

export const DropDownMenu = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Accordion className={classes["drop-down-menu"]}>
      <AccordionSummary
        className='accordion-summary'
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className='typography'>
          <FaHome className='fa-home' />
          <div className='home-text'>Home</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion-details'>
        <Typography className='typography'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
