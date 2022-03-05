import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Tooltip, ClickAwayListener, Box } from '@mui/material'
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt'
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle'
import { Field } from '../../../../../Profile/subcomponents'
import { Status } from '../../'
import { style } from './style'

interface Props {
  status: string
  setStatus: (newStatus: Status) => void
}

export const GeneralInfoField = (props: Props): JSX.Element => {
  const { status, setStatus } = props
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const [showingNotification, setShowingNotification] = useState(false)
  return (
    <Field title="Bill Gate's Application" sx={style}>
      <div className='headline'>Co-chair, Bill & Melinda Gates Foundation</div>
      <div className='location'>Seattle, Washington, United States</div>
      <div className='workplace'>Bill & Melinda Gates Foundation</div>
      <div className={`status ${status}`}>
        {
          status == 'awaiting' &&
          'Applied 17m ago'
        }
        {
          status == 'accepted' &&
          'Accepted'
        }
        {
          status == 'rejected' &&
          'Rejected'
        }
      </div>
      <div className='action-buttons'>
        {
          status == 'awaiting' &&
          <>
            <Button className='accept-button' size='small' variant='outlined' onClick={() => { setStatus('accepted') }}>
              <span className='text'>Accept</span>
            </Button>
            <Button className='reject-button' size='small' variant='outlined' color='rejected' onClick={() => { setStatus('rejected') }}>
              <span className='text'>Reject</span>
            </Button>
          </>
        }
        {
          status == 'accepted' &&
          <Button className='accepted-button' size='small' variant='outlined' disabled>
            <span className='text'>Accepted</span>
          </Button>
        }
        {
          status == 'rejected' &&
          <Button className='rejected-button' size='small' variant='outlined' disabled>
            <span className='text'>Rejected</span>
          </Button>
        }
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
          placement='bottom-start'
          title={
            <ClickAwayListener onClickAway={() => { setOpen(false) }}>
              <Box>
                <button className='option-button' onClick={() => {
                  navigate('/u')
                  setOpen(false)
                }}>
                  <FaUserAlt className='tooltip-icon' />
                  <span className='tooltip-texts'>
                    <span className='main-text'>See full profile</span>
                  </span>
                </button>
                <button className='option-button' onClick={() => {
                  anchorRef.current.click()
                  setOpen(false)
                }}
                >
                  {/* //@ts-ignore */}
                  <a href='mailto:evil_murderer666@profits.com' target='_blank' rel='noreferrer' style={{ display: 'none' }} ref={anchorRef} />
                  <FaEnvelope className='tooltip-icon' />
                  <span className='tooltip-texts'>
                    <span className='main-text'>evil_murderer666@profits.com</span>
                    <span className='subtext'>Email address</span>
                  </span>
                </button>
                {/*
                */}
                <button className='option-button' onClick={() => {
                  navigator.clipboard.writeText('+12345678')
                  setOpen(false)
                  setShowingNotification(true)
                  setTimeout(() => setShowingNotification(false), 3000)
                }}>
                  <FaPhoneAlt className='tooltip-icon' />
                  <span className='tooltip-texts'>
                    <span className='main-text'>+12345678</span>
                    <span className='subtext'>Copy phone number</span>
                  </span>
                </button>
              </Box>
            </ClickAwayListener>
          }
        >
          <Button className='more-button' size='small' variant='outlined' onClick={() => { setOpen(prevStatus => !prevStatus) }}>
            <span className='text'>More...</span>
          </Button>
        </Tooltip>
        {
          showingNotification &&
          <span className='copied-notification'>
            <FaCheckCircle className='notification-icon' />
            <span className='notification-text'>Phone number copied</span>
          </span>
        }
      </div >
    </Field >
  )
}