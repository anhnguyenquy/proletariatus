import { useState } from 'react'
import { Button } from '@mui/material'
import { Field } from '../../../../../../subcomponents'
import { Line } from '../../../../../../../../core/components'
import { openInNewTab } from '../../../../../../../../core/helpers'
import { profilesData, pagesData, spacesData } from './dataTemplate'
import { ProfilesData, PagesData, SpacesData } from './interfaces'
import { style } from './style'

export const InterestsField = (): JSX.Element => {
  const [active, setActive] = useState<'profiles' | 'pages' | 'spaces'>('profiles')
  const [isMinimized, setIsMinimized] = useState(true)
  const sliceData = () => {
    switch (active) {
      case 'profiles':
        return isMinimized ? profilesData.slice(0, 6) : profilesData
      case 'pages':
        return isMinimized ? pagesData.slice(0, 6) : pagesData
      case 'spaces':
        return isMinimized ? spacesData.slice(0, 6) : spacesData
    }
  }
  return (
    <Field title='Interests' sx={style}>
      <div className='switch-tab-buttons'>
        <Button
          className={`tab-button profiles-button ${active == 'profiles' ? 'active' : ''}`}
          variant='text'
          onClick={() => { setActive('profiles') }}
        >
          <div className='button-text'>Profiles</div>
          <Line className='selected-indicator' style={{ display: 'none' }} />
        </Button>
        <Button
          className={`tab-button pages-button ${active == 'pages' ? 'active' : ''}`}
          variant='text'
          onClick={() => { setActive('pages') }}
        >
          <div className='button-text'>Pages</div>
          <Line className='selected-indicator' style={{ display: 'none' }} />
        </Button>
        <Button
          className={`tab-button spaces-button ${active == 'spaces' ? 'active' : ''}`}
          variant='text'
          onClick={() => { setActive('spaces') }}
        >
          <div className='button-text'>Spaces</div>
          <Line className='selected-indicator' style={{ display: 'none' }} />
        </Button>
      </div>
      <Line className='switch-tab-ending-line' />
      <div className='items' style={{ marginBottom: isMinimized ? '1rem' : '-0.5rem' }}>
        {
          active == 'profiles' &&
          <div className='profiles'>
            {
              // @ts-ignore
              sliceData().map((item: ProfilesData) => {
                return (
                  <div className='profile' onClick={() => { openInNewTab(item.url) }}>
                    <img src={item.ava} className='ava' />
                    <div className='infos'>
                      <div className='name'>{item.name}</div>
                      <div className='headline'>{item.headline}</div>
                      <div className='followers-no'>
                        <span className='actual-number'>{item.followersNo.toLocaleString('en-US')}&nbsp;</span>
                        <span className='followers-text'>followers</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
        {
          active == 'pages' &&
          <div className='pages'>
            {
              // @ts-ignore
              sliceData().map((item: PagesData) => {
                return (
                  <div className='page' onClick={() => { openInNewTab(item.url) }}>
                    <img src={item.ava} className='ava' />
                    <div className='infos'>
                      <div className='name'>{item.name}</div>
                      <div className='followers-no'>{item.followersNo.toLocaleString('en-US')}&nbsp;followers</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
        {
          active == 'spaces' &&
          <div className='spaces'>
            {
              // @ts-ignore
              sliceData().map((item: SpacesData) => {
                return (
                  <div className='space' onClick={() => { openInNewTab(item.address) }}>
                    <img src={item.ava} className='ava' />
                    <div className='infos'>
                      <div className='space-title'>{item.title}</div>
                      <div className='space-address'>{item.address}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
      {
        isMinimized &&
        <button className='see-all-button' onClick={() => { setIsMinimized(false) }}>See all</button>
      }
    </Field >
  )
}