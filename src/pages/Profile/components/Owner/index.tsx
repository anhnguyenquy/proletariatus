import { useState } from 'react'
import { Button, IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import BackgroundDefault from '../../../../core/media/profile-background-default.png'
import BillGatesAva from '../../../../core/media/bill_gates_ava.png'
import BreakthroughEnergy from '../../../../core/media/icons/breakthrough_energy.png'
import Harvard from '../../../../core/media/icons/harvard.png'
import { ReactComponent as Pen } from '../../../../core/media/icons/pen.svg'
import { NavBar } from '../../../../core/components'
import { Main, Offers, Posts } from './components'
import { useStyles } from './style'

export const Owner = (): JSX.Element => {
  const [active, setActive] = useState('main')
  const classes = useStyles()
  return (
    <div className={classes['owner']}>
      <NavBar loggedIn={true} current='profile' />
      <div className='billboard'>
        <div className='background-section'>
          <label htmlFor='background-upload-file'>
            <input accept='image/*' id='background-upload-file' type='file' style={{ display: 'none' }} />
            <IconButton color='primary' component='span' className='upload-background-button'>
              <PhotoCamera className='upload-background-button-icon' />
            </IconButton>
          </label>
          <img src={BackgroundDefault} className='background-image' />
        </div>
        <img src={BillGatesAva} className='ava' />
        <div className='bottom-section'>
          <div className='left'>
            <div className='profile-name'>Bill Gates</div>
            <div className='title'>Co-chair, Bill & Melinda Gates Foundation</div>
            <div className='contact'>
              <span className='location'>Seattle, Washington, United States</span>
              <span className='interpunct'>&nbsp;·&nbsp;</span>
              <span className='contact-info'>Contact info</span>
            </div>
            <div className='followers-and-following'>
              <span className='followers'>
                <span className='followers-num'>34,159,116&nbsp;</span>
                <span className='followers-text'>followers</span>
              </span>
              <span className='interpunct'>&nbsp;·&nbsp;</span>
              <span className='following'>
                <span className='following-num'>24,601&nbsp;</span>
                <span className='following-text'>following</span>
              </span>
            </div>
            <div className='connections'>+500 connections</div>
          </div>
          <div className='right'>
            <IconButton color='primary' component='span' className='edit-intro-button'>
              <Pen className='edit-intro-button-icon' />
            </IconButton>
            <div className='item first'>
              <img src={BreakthroughEnergy} className='item-logo' />
              <div className='item-name'>Breakthrough Energy</div>
            </div>
            <div className='item'>
              <img src={Harvard} className='item-logo' />
              <div className='item-name'>Harvard University</div>
            </div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <Button
          className={`main-button ${active == 'main' ? 'active' : ''}`}
          variant={`${active == 'main' ? 'contained' : 'text'}`}
          onClick={() => { setActive('main') }}
        >
          <div className='button-text'>Main</div>
        </Button>
        <Button
          className={`posts-button ${active == 'posts' ? 'active' : ''}`}
          variant={`${active == 'posts' ? 'contained' : 'text'}`}
          onClick={() => { setActive('posts') }}
        >
          <div className='button-text'>Posts</div>
        </Button>
        <Button
          className={`offers-button ${active == 'offers' ? 'active' : ''}`}
          variant={`${active == 'offers' ? 'contained' : 'text'}`}
          onClick={() => { setActive('offers') }}
        >
          <div className='button-text'>Offers</div>
        </Button>
      </div>
      {
        active == 'main' &&
        <Main />
      }
      {
        active == 'posts' &&
        <Posts />
      }
      {
        active == 'offers' &&
        <Offers />
      }
    </div>
  )
}