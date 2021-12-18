import { useStyles } from './style'
import { FaUserCheck } from '@react-icons/all-files/fa/FaUserCheck'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Business from '../../../../core/media/icons/spaces/business.png'
import More from '../../../../core/media/icons/more.png'

const FollowingStatus = (): JSX.Element => {
  return (
    <button className='following-status'>
      <div className='status-icon-container'>
        <FaUserCheck className='status-icon' />
      </div>
      <div className='button-text'>Following</div>
      <div className='number-of-followers'>2M</div>
    </button>
  )
}

export const InfoBar = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes['info-bar']}>
      <div className='top'>
        <div className='ava-container'>
          <img className='ava' src={Business} />
        </div>
        <div className='top-middle'>
          <div className='space-title'>Business</div>
          <FollowingStatus />
        </div>
        <IconButton className='settings-button'>
          <img src={More} className='button-icon' />
        </IconButton>
      </div>
      <div className='bottom'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio sit amet neque fringilla posuere sed in tortor. Phasellus sit amet est at ex finibus auctor. Nulla rhoncus leo vel ex tincidunt, a hendrerit leo elementum.
      </div>
    </div>
  )
}