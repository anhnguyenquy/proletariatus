import { useState } from 'react'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../../core/components/'
import { NavBar } from '../../../core/components'
import { Offers, Posts } from './components'
import {
  useStylesPC,
  //   useStylesTablet,
  //   useStylesPhone,
  //   useStylesExtraSmall,
} from './styles'

const LoggedIn = (): JSX.Element => {
  const classesPC = useStylesPC()
  //   const classesTablet = useStylesTablet();
  //   const classesPhone = useStylesPhone();
  //   const classesExtraSmall = useStylesExtraSmall();
  const [active, setActive] = useState('offers')
  return (
    <ThemeProvider theme={theme}>
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
        <NavBar loggedIn={true} current='default' />
        <div className='main'>
          <div className='button-container'>

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
          </div>
          {
            active == 'offers' ?
              <Offers />
              :
              <Posts />
          }
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LoggedIn