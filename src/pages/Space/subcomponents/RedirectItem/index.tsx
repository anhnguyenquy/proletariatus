import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useStyles } from './style'

interface Props {
  icon?: string
  iconObject?: JSX.Element
  title: string
  spaceAddress?: string
  titleStyle?: Object
  followersNo?: string
}

export const RedirectItem = (props: Props): JSX.Element => {
  const navigate = useNavigate()
  const { icon, iconObject, title, spaceAddress, titleStyle, followersNo } = props
  const classes = useStyles()
  const handleClick = () => {
    if (spaceAddress != undefined && spaceAddress != '') {
      navigate(`/${spaceAddress}`)
    }
  }
  return (
    <Button
      className={classes['redirect-item']}
      variant='outlined'
      onClick={handleClick}
      color='grey'
      startIcon={
        <>
          {
            icon != undefined && icon != '' ?
              <div className='image-container'>
                <img src={icon} />
              </div>
              :
              <div className='icon-object-container'>
                {iconObject}
              </div>
          }
        </>
      }
    >
      <div className='button-text'>
        <div className='space-title' style={titleStyle}>{title}</div>
        {
          spaceAddress != '' && spaceAddress != undefined ?
            <div className='space-address'>
              {spaceAddress}
              <span className='interpunct'>&nbsp;·&nbsp;</span>
              <span className='followers-no'>{followersNo}&nbsp;followers</span>
            </div>
            :
            <></>
        }
      </div>
    </Button>
  )
}
