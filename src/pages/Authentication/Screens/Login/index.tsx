import { Line } from '../../../../core/components'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { useDeviceBreakPoint } from '../../../../core/hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useStylesPC,
  useStylesTablet,
  useStylesPhone,
  useStylesExtraSmall,
} from './styles'

export const Login = (): JSX.Element => {
  const { isPhone, isTablet, isExtraSmall, isPC } = useDeviceBreakPoint()
  const classesPC = useStylesPC()
  const classesTablet = useStylesTablet()
  const classesPhone = useStylesPhone()
  const classesExtraSmall = useStylesExtraSmall()
  const navigate = useNavigate()
  const [loggingIn, setLoggingIn] = useState(false)
  const handleLogin = () => {
    setLoggingIn(true)
  }
  
  return (
    <div
      className={
        !(isTablet || isPhone || isExtraSmall)
          ? classesPC.login
          : !(isPhone || isExtraSmall)
            ? classesTablet.login
            : !isPhone
              ? classesExtraSmall.login
              : classesPhone.login
      }
    >
      <div className='app-info'>
        <div className='app-name'>Placeholder</div>
        <div className='app-description'>
          Placeholder helps you find extracurricular activities like clubs,
          job offers, and internships
        </div>
      </div>
      <div className='credential-box'>
        <div className='login-area'>
          <input
            type='text'
            placeholder='Email address or phone number'
            spellCheck={false}
          />
          <input type='password' placeholder='Password' />
          <LoadingButton
            className='login-button'
            variant='contained'
            size='small'
            color='primary'
            loading={loggingIn}
            onClick={handleLogin}
          >
            Login
          </LoadingButton>
        </div>
        <button className='forgot-password'>Forgot Password?</button>
        <Line width='90%' />
        <Button
          className='sign-up-button'
          variant='contained'
          size='small'
          color='secondary'
          href='/sign-up'
        >
          Create New Account
        </Button>
      </div>
    </div>
  )
}
