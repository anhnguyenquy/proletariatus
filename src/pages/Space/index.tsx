import { useState } from 'react'
import { Button } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { NavBar, Line } from '../../core/components'
import Journalism from '../../core/media/icons/spaces/journalism.png'
import { Offers, Posts } from './components'
import { InfoBar, RedirectItem, CreateOfferDialog } from './subcomponents'
import { useStylesPC } from './styles'

export const Space = (): JSX.Element => {
  const classesPC = useStylesPC()
  const [active, setActive] = useState('offers')
  const [offersExpanded, setOffersExpanded] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <div className={classesPC.space}>
      <NavBar loggedIn={true} current='default' />
      <div className='page-content'>
        <div className='middle-content'>
          <InfoBar />
          <div className='buttons-container'>
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
            {
              active == 'offers' &&
              <>
                <Button onClick={() => { setDialogOpen(true) }} className='create-offer-button' variant='outlined' size='small' startIcon={<FaPlus className='create-offer-button-icon' />}>
                  <div className='button-text'>Create Offer</div>
                </Button>
                <CreateOfferDialog open={dialogOpen} onClose={() => { setDialogOpen(false) }} />
              </>
            }
          </div>
          <Line />
          {
            active == 'offers' ?
              <Offers setOffersExpanded={(status: boolean) => setOffersExpanded(status)} />
              :
              <Posts />
          }
        </div>
        <div className='right-content'>
          {
            !offersExpanded &&
            <div className='related-spaces'>
              <div className='box-title'>Related Spaces</div>
              <Line />
              <div className='space-items'>
                <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                /> <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                />
                <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                />
                <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                />
                <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                />
                <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                />
                <RedirectItem
                  icon={Journalism}
                  title='Journalism'
                  spaceAddress='s/journalism'
                  followersNo='7M'
                />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}