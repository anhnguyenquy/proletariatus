import { useState } from 'react'
import { Box, Button } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaCheck } from '@react-icons/all-files/fa/FaCheck'
import { NavBar } from '../../../../core/components'
import BackgroundDefault from '../../../../core/media/profile-background-default.png'
import BillGatesAva from '../../../../core/media/bill_gates_ava.png'
import BreakthroughEnergy from '../../../../core/media/icons/breakthrough_energy.png'
import Harvard from '../../../../core/media/icons/harvard.png'
import ConnectionAva1 from '../../../../core/media/connection_ava_1.png'
import ConnectionAva2 from '../../../../core/media/connection_ava_2.png'
import {
  AboutField,
  EducationField,
  ExperienceField,
  LicensesAndCertificationsField,
  InterestsField,
  SkillsField,
  CVsField
} from './fields'
import { style } from './style'

export const Public = (): JSX.Element => {
  const [followingStatus, setFollowingStatus] = useState(false)
  return (
    // @ts-ignore
    <Box className='public' sx={style}>
      <NavBar loggedIn={true} current='profile' />
      <div className='billboard'>
        <div className='background-section'>
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
            <div className='connections'>
              <span className='connections-no'>+500&nbsp;</span>
              <span className='connections-text'>connections</span>
            </div>
            <div className='mutual-connections'>
              <span className='avas'>
                <img src={ConnectionAva1} className='connection-ava-1' />
                <img src={ConnectionAva2} className='connection-ava-2' />
              </span>
              <span className='mutual-connections-text'>
                <span className='mutual-connections-no'>3 mutual connections:&nbsp;</span>
                <span className='mutual-connections-names'>Quang Nguyen, Dung Phuong (Junnie), and 1 other</span>
              </span>
            </div>
            <div className='follow-and-connect-buttons'>
              <Button className='follow-button' onClick={() => { setFollowingStatus(prevFollowingStatus => !prevFollowingStatus) }} startIcon={!followingStatus ? <FaPlus className='follow-button-icon' /> : <FaCheck className='follow-button-icon' />} size='small' variant='contained'>
                <span className='follow-button-text'>
                  {
                    followingStatus ? 'Following' : 'Follow'
                  }
                </span>
              </Button>
              <Button className='connect-button' size='small' variant='outlined'>
                <span className='connect-button-text'>Connect</span>
              </Button>
            </div>
          </div>
          <div className='right'>
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
      <AboutField />
      <EducationField />
      <ExperienceField />
      <LicensesAndCertificationsField />
      <InterestsField />
      <SkillsField />
      <CVsField />
    </Box>
  )
}