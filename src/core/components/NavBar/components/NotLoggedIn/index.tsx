import { ReactComponent as GoogleIcon } from '../../../../../core/media/icons/google.svg'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useStyles } from './style'

export const NotLoggedIn = () => {
	const history = useHistory()
	const classes = useStyles()
	return (
		<div className={classes['nav-bar']}>
			<GoogleIcon className='google-icon' />
			<Button
				className='login-button'
				variant='outlined'
				onClick={() => { history.push('/login') }}
			>
				<div className='button-text'>Login</div>
			</Button>
			<Button
				className='sign-up-button'
				variant='contained'
				onClick={() => { history.push('/sign-up') }}
			>
				<div className='button-text'>Sign Up</div>
			</Button>
		</div>
	)
}