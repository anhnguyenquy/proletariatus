import GarenaAva from '../../../../../../../core/media/icons/garena_ava.png'
import { useStyles } from './style'
import { useState, useRef, useEffect } from 'react'

interface Props {
	expand?: () => void
	expanded?: boolean
	// avaSrc: string,
	offerTitle: string
	postedBy: string
	space: string
	workplace: string
	location: string
	// time: string,
	applicantsNo: number
}

export const OfferItem = (props: Props): JSX.Element => {
	const { expand, expanded = false, /* avaSrc, */ offerTitle, postedBy, space, workplace, location, /* time, */ applicantsNo } = props
	const classes = useStyles()
	const [hovering, setHovering] = useState(false)
	const [beingClicked, setBeingClicked] = useState(false)
	return (
		<div className={!expanded ? classes['offer-item'] : classes['offer-item-expanded']}
			onMouseOver={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onMouseDown={() => {
				setBeingClicked(true)
				expand()
			}}
			onMouseUp={() => setBeingClicked(false)}
		>
			<div className='ava-container'>
				<img src={GarenaAva} />
			</div>
			<div className='main'>
				<div className={`offer-title ${hovering ? 'hovering' : ''} ${beingClicked ? 'being-clicked' : ''}`}>{offerTitle}</div>
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
