import { useState } from 'react'
import _ from 'lodash'
import { Box, IconButton, Button, Tooltip, ClickAwayListener } from '@mui/material'
import { FaEllipsisH } from '@react-icons/all-files/fa/FaEllipsisH'
import { FaListUl } from '@react-icons/all-files/fa/FaListUl'
import { NavBar } from '../../../../core/components'
import GarenaAva from '../../../../core/media/icons/garena_ava.png'
import BillGatesAva from '../../../../core/media/bill_gates_ava.png'
import { ReactComponent as Pen } from '../../../../core/media/icons/pen.svg'
import {
  InsightsFromProfileField,
  AboutField,
  EducationField,
  ExperienceField,
  LicensesAndCertificationsField,
  InterestsField,
  SkillsField,
  CVsField,
  GeneralInfoField
} from './fields'
import { style } from './style'

export type Status = 'awaiting' | 'accepted' | 'rejected'

export const Private = (): JSX.Element => {
  const [hovering, setHovering] = useState(false)
  const [beingClicked, setBeingClicked] = useState(false)
  const [open, setOpen] = useState(false)
  /* avaSrc, */
  const offerTitle = 'Frontend Developer'
  const postedBy = 'p/Garena'
  const space = 's/ComputerScience'
  const workplace = 'Garena'
  const location = 'Hanoi, Vietnam'
  /* time, */
  const applicantsNo = 7
  const recruiting = false
  const id = 'dvWPkjOeMehdmPf8S1Qs'
  const [applicants, setApplicants] = useState([
    {
      id: 'gpm4Ep7sJpsxVunoBfDz',
      status: 'awaiting'
    },
    {
      id: '0uMVKhZb1RI9Q96nJkXy',
      status: 'accepted'
    },
    {
      id: 'UFwoFHZOt0P2I79VH0o5',
      status: 'rejected'
    }
  ])
  const [currentApplicantIndex, setCurrentApplicant] = useState<number>(0)
  return (
    // @ts-ignore
    <Box className='private' sx={style}>
      <NavBar loggedIn={true} current='profile' />
      <div className='top-bar'>
        <div className='offer-infos'>
          <div className='ava-container'>
            <img src={GarenaAva} />
          </div>
          <div className='main'>
            <div className={`offer-title ${hovering ? 'hovering' : ''} ${beingClicked ? 'being-clicked' : ''}`}>{offerTitle}</div>
            <div className='offer-info'>posted by {postedBy} in {space}</div>
            <div className='workplace'>{workplace}</div>
            <div className='location'>{location}</div>
            <div className='bottom-info'>
              <span className='recruitment-status'>
                {
                  recruiting ?
                    <span className='actively-recruiting-text'>Actively recruiting</span>
                    :
                    <span className='closed-text'>Closed</span>
                }
              </span>
              <span className='post-time'>&nbsp;· 1 month ago&nbsp;</span>
              {
                // @ts-ignore
                applicantsNo == 0 ? '' :
                  // @ts-ignore
                  applicantsNo == 1 ? <span className='applicants-no'>{`· 1 Applicant`}</span> :
                    <span className='applicants-no'>{`· ${applicantsNo} Applicants`}</span>
              }
            </div>
          </div>
        </div>
        <div className='task-buttons'>
          <IconButton className='edit-offer-button'>
            <Pen />
          </IconButton>
          <Button className='close-offer-button' size='small' variant='outlined'>
            Close Offer
          </Button>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={() => {
              setOpen(false)
            }}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement='bottom-end'
            title={
              <ClickAwayListener onClickAway={() => { setOpen(false) }}>
                <button className='see-all-offers-button'>
                  <FaListUl className='tooltip-icon' />
                  <span className='tooltip-text'>See all my offers</span>
                </button>
              </ClickAwayListener>
            }
          >
            <IconButton className='offer-setting-button' onClick={() => {
              setOpen(prevOpen => !prevOpen)
            }}>
              <FaEllipsisH />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className='applicants-content'>
        <div className='left-side'>
          <div className='items'>
            {
              applicants.map((item, index) => {
                return (
                  <Box className='item' onClick={() => { setCurrentApplicant(index) }} sx={{
                    borderTop: index == currentApplicantIndex ? '1px solid #8A8A8A' : '',
                    borderRight: index == currentApplicantIndex ? '1px solid #8A8A8A' : '',
                    borderBottom: index == currentApplicantIndex ? '1px solid #8A8A8A' : '',
                    borderLeft: `5px solid ${item.status == 'awaiting' ? '#8A8A8A' :
                      item.status == 'accepted' ? '#13AA52' : '#D22D33'
                      }`
                  }}>
                    <div className='left-section'>
                      <img src={BillGatesAva} className='applicant-ava' />
                    </div>
                    <div className='applicant-infos'>
                      <div className='applicant-name'>Bill Gates</div>
                      <div className='applicant-headline'>Co-chair, Bill & Melinda Gates Foundation</div>
                      <div className='applicant-location'>Seattle, Washington, United States</div>
                      <div className='applicant-workplace'>Bill & Melinda Gates Foundation</div>
                      <div className={`applicant-status ${item.status}`}>
                        {
                          item.status == 'awaiting' &&
                          'Applied 17m ago'
                        }
                        {
                          item.status == 'accepted' &&
                          'Accepted'
                        }
                        {
                          item.status == 'rejected' &&
                          'Rejected'
                        }
                      </div>
                    </div>
                  </Box>
                )
              })
            }
          </div>
        </div>
        <div className='right-side'>
          <GeneralInfoField status={applicants[currentApplicantIndex].status} setStatus={(newStatus: Status) => {
            const clonedApplicants = _.cloneDeep(applicants)
            clonedApplicants[currentApplicantIndex].status = newStatus
            setApplicants(clonedApplicants)
          }} />
          <InsightsFromProfileField />
          <AboutField />
          <EducationField />
          <ExperienceField />
          <LicensesAndCertificationsField />
          <InterestsField />
          <SkillsField />
          <CVsField />
        </div>
      </div>
    </Box >
  )
}