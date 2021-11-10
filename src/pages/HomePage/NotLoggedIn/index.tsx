import { useState } from 'react'
import { NavBar } from '../../../core/components'
import { useDeviceBreakPoint } from '../../../core/hooks'
import { RedirectItem } from '../../../core/components/NavBar/components/LoggedIn/components/DropDownMenu/RedirectItem'
import Business from '../../../core/media/icons/spaces/business.png'
import Economics from '../../../core/media/icons/spaces/economics.png'
import Biology from '../../../core/media/icons/spaces/biology.png'
import Journalism from '../../../core/media/icons/spaces/journalism.png'
import Education from '../../../core/media/icons/spaces/education.png'
import HealthProfessions from '../../../core/media/icons/spaces/health-professions.png'
import ComputerScience from '../../../core/media/icons/spaces/computer-science.png'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../../core/components/'
import { Offers, Posts } from './components'
import {
  useStylesPC,
  //   useStylesTablet,
  //   useStylesPhone,
  //   useStylesExtraSmall,
} from './styles';


const NotLoggedIn = (): JSX.Element => {
  const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint()
  const classesPC = useStylesPC()
  //   const classesTablet = useStylesTablet();
  //   const classesPhone = useStylesPhone();
  //   const classesExtraSmall = useStylesExtraSmall();
  const [active, setActive] = useState('offers')
  return (
    <div className={classesPC['home-page']}>
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
      <NavBar loggedIn={false} />
      <div className='content'>
        <div className='left-section'>
          <div className='left-bar'>
            <div className='title'>Top 7 most viewed Spaces</div>
            <div className='space-items'>
              <RedirectItem icon={Business} title='Business' spaceAddress='s/business' />
              <RedirectItem icon={Economics} title='Economics' spaceAddress='s/economics' />
              <RedirectItem icon={Biology} title='Biology' spaceAddress='s/biology' />
              <RedirectItem icon={ComputerScience} title='CS MIT' spaceAddress='s/mit_compsci' />
              <RedirectItem icon={Journalism} title='Journalism' spaceAddress='s/journalism' />
              <RedirectItem icon={Education} title='Education' spaceAddress='s/education' />
              <RedirectItem icon={HealthProfessions} title='Health Professions' spaceAddress='s/HealthProfessions' />
            </div>
          </div>
        </div>
        <div className='main'>
          <div className='button-container'>
            <ThemeProvider theme={theme}>
              <Button
                className={`offers-button ${active == 'offers' ? 'active' : ''}`}
                variant={`${active == 'offers' ? 'contained' : 'text'}`}
                onClick={() => { setActive('offers') }}
              >
                <div className='button-text'>Offers</div>
              </Button>
              <Button
                className={`posts-button ${active == 'posts' ? 'active' : ''}`}
                variant={`${active == 'posts' ? 'contained' : 'text'}`}
                onClick={() => { setActive('posts') }}
              >
                <div className='button-text'>Posts</div>
              </Button>
            </ThemeProvider>
          </div>
          {
            active == 'offers' ?
              <Offers />
              :
              <Posts />
          }
        </div>
      </div>
    </div>
  )
}

export default NotLoggedIn