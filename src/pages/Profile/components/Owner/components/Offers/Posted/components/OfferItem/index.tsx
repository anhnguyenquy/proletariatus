import { useState, useRef, useEffect } from 'react'
import { IconButton } from '@mui/material'
import GarenaAva from '../../../../../../../../../core/media/icons/garena_ava.png'
import { ReactComponent as Recruiting } from '../../../../../../../../../core/media/icons/recruiting.svg'
import { ReactComponent as Pen } from '../../../../../../../../../core/media/icons/pen.svg'
import { useStyles } from './style'

interface Props {
  expand?: () => void
  // avaSrc: string,
  offerTitle: string
  postedBy: string
  space: string
  workplace: string
  location: string
  // time: string,
  applicantsNo: number
  recruiting: boolean
  id: string
}

export const OfferItem = (props: Props): JSX.Element => {
  const { expand, /* avaSrc, */ offerTitle, postedBy, space, workplace, location, /* time, */ applicantsNo, recruiting, id } = props
  const classes = useStyles()
  const [hovering, setHovering] = useState(false)
  const [beingClicked, setBeingClicked] = useState(false)
  return (
    <div className={classes['offer-item']}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseDown={() => {
        setBeingClicked(true)
      }}
      onMouseUp={() => setBeingClicked(false)}
    >
      <IconButton color='primary' component='span' className='edit-button'>
        <Pen className='edit-button-icon' />
      </IconButton>
      <div className='ava-container' onClick={() => { expand() }}>
        <img src={GarenaAva} />
      </div>
      <div className='main' onClick={() => { expand() }}>
        <div className={`offer-title ${hovering ? 'hovering' : ''} ${beingClicked ? 'being-clicked' : ''}`}>{offerTitle}</div>
        <div className='offer-info'>posted by {postedBy} in {space}</div>
        <div className='workplace'>{workplace}</div>
        <div className='location'>{location}</div>
        <div className='recruitment-status'>
          {
            recruiting ?
              <>
                <Recruiting className='recruiting-icon' />
                <span className='actively-recruiting-text'>Actively recruiting</span>
              </>
              :
              <span className='closed-text'>Closed</span>
          }
        </div>
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
