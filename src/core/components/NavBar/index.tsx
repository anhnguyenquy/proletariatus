import { ReactComponent as GoogleIcon } from "../../../media/icons/google.svg"
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import { Popover, Button, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { bindTrigger, bindPopover } from "material-ui-popup-state"
import { usePopupState } from "material-ui-popup-state/hooks"
import { SearchInput, Icon, RedirectItem } from "./components"
import Business from "../../../media/icons/spaces/business.png"
import Economics from "../../../media/icons/spaces/economics.png"
import Biology from "../../../media/icons/spaces/biology.png"
import Journalism from "../../../media/icons/spaces/journalism.png"
import Education from "../../../media/icons/spaces/education.png"
import HealthProfessions from "../../../media/icons/spaces/health-professions.png"
import Engineering from "../../../media/icons/spaces/engineering.png"
import Arts from "../../../media/icons/spaces/arts.png"
import ComputerScience from "../../../media/icons/spaces/computer-science.png"
import { useStyles } from "./style"

interface Props {
  current:
  | "default"
  | "friends"
  | "pages"
  | "profile"
  | "notifications"
  | "settings"
}

export const NavBar = (props: Props): JSX.Element => {
  const { current } = props
  const classes = useStyles()
  const popupState = usePopupState({
    variant: "popover",
    popupId: "popup-state",
  })
  return (
    <div className={classes["nav-bar"]}>
      <GoogleIcon className='google-icon' />
      <Button
        className='popover-button'
        variant='outlined'
        startIcon={<FaHome className='start-icon' />}
        endIcon={
          <ExpandMoreIcon
            className='end-icon'
            style={
              popupState.isOpen
                ? {
                  transform: "rotate(180deg)",
                  transition: "transform 0.3s",
                }
                : {
                  transition: "transform 0.3s",
                }
            }
          />
        }
        {...bindTrigger(popupState)}
      >
        <div className='button-text'>Home</div>
      </Button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: classes["nav-bar-popover"],
        }}
        sx={{
          boxShadow: "none",
        }}
      >
        <Typography className='popover-content'>
          <input
            type='text'
            spellCheck={false}
            placeholder='Filter'
            className='filter-input'
          />
          <div className='my-spaces-section'>
            <div className='section-title'>MY SPACES</div>
            {/* <Button
              className='create-space-button'
              variant='outlined'
              startIcon={<FaPlus className='start-icon' />}
            >
              <div
                className='button-text'
                onClick={(e) => {
                  popupState.close()
                }}
              >
                Create Space
              </div>
            </Button> */}
            <div className='space-items'>
              <RedirectItem
                iconObject={<FaPlus className='start-icon' style={{
                  color: "white",
                  backgroundColor: "#13AA52",
                  border: "1px solid #13AA52",
                  padding: "0.1rem",
                  fontSize: "0.7rem",
                  borderRadius: "3px",
                }} />}
                title='Create Space'
                titleStyle={{ fontWeight: "500", fontSize: "0.75rem" }}
              />
              <RedirectItem
                icon={Business}
                title='Business'
                spaceAddress='s/business'
              />
              <RedirectItem
                icon={Economics}
                title='Economics'
                spaceAddress='s/economics'
              />
              <RedirectItem
                icon={Biology}
                title='Biology'
                spaceAddress='s/biology'
              />
              <RedirectItem
                icon={Journalism}
                title='Journalism'
                spaceAddress='s/journalism'
              />
              <RedirectItem
                icon={Education}
                title='Education'
                spaceAddress='s/education'
              />
              <RedirectItem
                icon={HealthProfessions}
                title='Health Professions'
                spaceAddress='s/HealthProfessions'
              />
              <RedirectItem
                icon={Engineering}
                title='Engineering'
                spaceAddress='s/engineering'
              />
              <RedirectItem icon={Arts} title='Arts' spaceAddress='s/arts' />
              <RedirectItem
                icon={ComputerScience}
                title='Computer Science'
                spaceAddress='s/computer_science'
              />
            </div>
          </div>
          <div className='following-section'>
            <div className='section-title'>FOLLOWING</div>
            <div className='following-items'>
              <RedirectItem
                icon={Business}
                title='Jeff Bezos'
                spaceAddress='u/evil_capitalist64'
              />
              <RedirectItem
                icon={Economics}
                title='Elon Muskito'
                spaceAddress='p/emerald_miner77'
              />
            </div>
          </div>
          <div className='other-section'>
            <div className='section-title'>OTHER</div>
            <div className='other-items'>
              <RedirectItem
                iconObject={<i className='far fa-user-circle' />}
                title='User Settings'
              />
              <RedirectItem
                iconObject={<FaPlus className='create-post-icon' />}
                title='Create Post'
              />
              <RedirectItem
                iconObject={<FaPlus className='create-offer-icon' />}
                title='Create Offer'
              />
            </div>
          </div>
        </Typography>
      </Popover>
      <div className='left-icons'>
        <Icon
          containerClassName='friends'
          faIconName='fa-user-friends'
          current={current}
        />
        <Icon
          containerClassName='pages'
          faIconName='fa-flag'
          current={current}
        />
      </div>
      <SearchInput />
      <div className='right-icons'>
        <Icon
          containerClassName='profile'
          faIconName='fa-user-circle'
          current={current}
        />
        <Icon
          containerClassName='notifications'
          faIconName='fa-bell'
          current={current}
        />
        <Icon
          containerClassName='settings'
          faIconName='fa-cog'
          current={current}
        />
      </div>
    </div>
  )
}
