import { Button } from '@mui/material'
import garenaAva from '../../../../../../core/media/garena_ava.png'
import { theme } from '../../../../../../core/components'
import { useStyles } from './style'
import { useState, useRef, useEffect } from 'react'

interface Props {
	// avaSrc: string,
	offerTitle: string,
	postedBy: string,
	space: string,
	workplace: string,
	location: string,
	// time: string,
	applicantsNo: number
}

const OfferItem = (props: Props): JSX.Element => {
	const { /* avaSrc, */ offerTitle, postedBy, space, workplace, location, /* time, */ applicantsNo } = props
	const classes = useStyles()
	const [hovering, setHovering] = useState(false)
	const [beingClicked, setBeingClicked] = useState(false)
	return (
		<div className={classes['offer-item']}
			onMouseOver={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onMouseDown={() => setBeingClicked(true)}
			onMouseUp={() => setBeingClicked(false)}
		>
			<div className='ava-container'>
				<img src={garenaAva} />
			</div>
			<div className='main'>
				<div className={`offer-title ${hovering ? 'hovering': ''} ${beingClicked ? 'being-clicked': ''}`}>{offerTitle}</div>
				<div className='offer-info'>posted by {postedBy} in {space}</div>
				<div className='workplace'>{workplace}</div>
				<div className='location'>{location}</div>
				<div className='bottom-info'>1 month ago&nbsp;
					{
						applicantsNo == 0 ? '' :
							applicantsNo == 1 ? <span>{`· 1 Applicant`}</span> :
								<span>{`· ${applicantsNo} Applicants`}</span>
					}
				</div>
			</div>
		</div>
	)
}
export default OfferItem