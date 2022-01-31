import { Button } from '@mui/material'
import fptCover from '../../../../../../core/media/fpt_cover.png'
import fptLogo from '../../../../../../core/media/icons/page-logo.png'
import { useNavigate } from 'react-router-dom'
import { useStyles } from './style'

const OfferItem = (): JSX.Element => {
	const navigate = useNavigate()
	const classes = useStyles()
	return (
		<div className={classes['offer-item']}>
			<img src={fptCover} className='cover-image' />
			<img src={fptLogo} className='ava' />
			<div className='offer-title'>React Native Developer</div>
			<div className='organization-name'>FPT Software</div>
			<div className='location'>Hanoi, Vietnam</div>
			<Button
				className='apply-button'
				variant='outlined'
				onClick={() => { navigate('/login') }}
			>
				<div className='button-text'>Apply</div>
			</Button>
		</div>
	)
}

export default OfferItem