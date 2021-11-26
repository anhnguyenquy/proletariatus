import { Line, NavBar } from '../../core/components'
import { useDeviceBreakPoint, useDocumentTitle } from '../../core/hooks'
import { FaCog } from '@react-icons/all-files/fa/FaCog'
import IconButton from '@mui/material/IconButton'
import { DropDownMenu } from './components'
import Button from '@mui/material/Button'
import { BsPlus } from '@react-icons/all-files/bs/BsPlus'
import { FaCircle } from '@react-icons/all-files/fa/FaCircle'
import { FaCompass } from '@react-icons/all-files/fa/FaCompass'
import { FaCheck } from '@react-icons/all-files/fa/FaCheck'
import { FaUserPlus } from '@react-icons/all-files/fa/FaUserPlus'
import fptLogo from '../../core/media/icons/page-logo.png'
import { useHistory } from 'react-router-dom'
import {
  useStylesPC,
  //   useStylesTablet,
  //   useStylesPhone,
  //   useStylesExtraSmall,
} from './styles'

// interface Props {
//   ava?: string;
//   numberOfNewNotifications?: number;
//   pageName?: string;
//   pageID?: string;
// }

interface Props {
  ava: JSX.Element
  name: string
  hasNoti: boolean
}

const PageItem = () => {
  return (
    <div className='page-item'>
      <div className='left-stuffs'>
        <img src={fptLogo} />
        <div className='main-stuffs'>
          <div className='page-name'>FPT Software</div>
          <div className='page-info'>
            Information Technology {`${'&'}`} Services · <span>29,000</span>{' '}
            associates ·<span>65,523</span> followers
          </div>
        </div>
      </div>
      <div className='notifications'>
        <i className='fas fa-globe-americas'></i>
        <div className='title'>Notifications</div>
      </div>
    </div>
  )
}

export const BottomItem = (props: Props) => {
  // const { ava, numberOfNewNotifications, pageName, pageID } = props;
  const { ava, name, hasNoti } = props
  return (
    <a className='bottom-item' href='https://google.com'>
      <div className='ava-container'>
        <div className='ava-icon'>{ava}</div>
      </div>
      <div className='bottom-info'>
        <div className='bottom-name'>{name}</div>
        {hasNoti ? (
          <div className='notification-alert'>
            <FaCircle className='fa-circle' />
            <div className='notification-text'>3 new</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </a>
  )
}

export const PageManager = (): JSX.Element => {
  const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint()
  const classesPC = useStylesPC()
  //   const classesTablet = useStylesTablet();
  //   const classesPhone = useStylesPhone();
  //   const classesExtraSmall = useStylesExtraSmall();
  useDocumentTitle('Pages | Placeholder')
  const history = useHistory()
  return (
    <div className={classesPC['page-manager']}>
      {/* <div
        className={
          !(isTablet || isPhone || isExtraSmall)
            ? classesPC['page-manager']
            : !(isPhone || isExtraSmall)
            ? classesTablet['page-manager']
            : !isPhone
            ? classesExtraSmall['page-manager']
            : classesPhone['page-manager']
        }
      > */}
      <NavBar loggedIn={true} current='pages' />
      <div className='page-content'>
        <div className='left-bar'>
          <div className='top'>
            <div className='bar-title'>Pages</div>
            <IconButton className='icon-button'>
              <FaCog className='fa-cog' />
            </IconButton>
          </div>
          <DropDownMenu />
          <Button
            className='create-new-page-button'
            variant='contained'
            color='lightBackgroundPrimary'
            size='small'
            startIcon={<BsPlus />}
            href='/new-page'
          >
            Create New Page
          </Button>
          <Line width='16rem' />
          <div className='bottom-items'>
            <BottomItem name='Discover' hasNoti={false} ava={<FaCompass />} />
            <BottomItem
              name='Followed Pages'
              hasNoti={false}
              ava={<FaCheck />}
            />
            <BottomItem
              name='Invitations'
              hasNoti={true}
              ava={<FaUserPlus />}
            />
          </div>
        </div>
        <div className='main'>
          <div className='main-title'>Pages you manage</div>
          <div className='page-items'>
            <PageItem />
            <PageItem />
            <PageItem />
          </div>
        </div>
      </div>
    </div>
  )
}
