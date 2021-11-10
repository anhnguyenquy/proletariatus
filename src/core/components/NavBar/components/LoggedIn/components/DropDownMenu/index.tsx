import { Popover, Button, Typography } from '@mui/material'
import { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { usePopupState } from 'material-ui-popup-state/hooks'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { RedirectItem } from './RedirectItem'
import Business from '../../../../../../../core/media/icons/spaces/business.png'
import Economics from '../../../../../../../core/media/icons/spaces/economics.png'
import Biology from '../../../../../../../core/media/icons/spaces/biology.png'
import Journalism from '../../../../../../../core/media/icons/spaces/journalism.png'
import Education from '../../../../../../../core/media/icons/spaces/education.png'
import HealthProfessions from '../../../../../../../core/media/icons/spaces/health-professions.png'
import Engineering from '../../../../../../../core/media/icons/spaces/engineering.png'
import Arts from '../../../../../../../core/media/icons/spaces/arts.png'
import ComputerScience from '../../../../../../../core/media/icons/spaces/computer-science.png'
import { useStyles } from './style'

export const DropDownMenu = (): JSX.Element => {
  const classes = useStyles()
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'popup-state',
  })
  return (
    <div className={classes['drop-down-menu']}>
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
                    transform: 'rotate(180deg)',
                    transition: 'transform 0.3s',
                  }
                : {
                    transition: 'transform 0.3s',
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes['nav-bar-popover'],
        }}
        sx={{
          boxShadow: 'none',
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
            <div className='space-items'>
              <RedirectItem
                iconObject={
                  <FaPlus
                    className='start-icon'
                    style={{
                      color: 'white',
                      backgroundColor: '#13AA52',
                      border: '1px solid #13AA52',
                      padding: '0.1rem',
                      fontSize: '0.7rem',
                      borderRadius: '3px',
                    }}
                  />
                }
                title='Create Space'
                titleStyle={{ fontWeight: '500', fontSize: '0.75rem' }}
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
                icon={ComputerScience}
                title='CS MIT'
                spaceAddress='s/mit_compsci'
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
    </div>
  )
}
