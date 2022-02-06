import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { SubOfferItem } from '../../../HomePage/LoggedIn/components/Offers/components'
import { OfferItem, InfoItem, ApplyDialog } from '../../../HomePage/LoggedIn/components/Offers/components'
import { useStyles } from './style'

interface Props {
  setOffersExpanded: (status: boolean) => void
}

export const Offers = (props: Props): JSX.Element => {
  const { setOffersExpanded } = props
  const [expanded, setExpanded] = useState(false)
  const [useExternalURL, setUseExternalURL] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()
  useEffect(() => {
    setOffersExpanded(expanded)
  }, [expanded])
  return (
    <div className={classes['offers']}>
      <div className='content' id={`${expanded && 'expanded'}`}>
        <div className='left'>
          <OfferItem
            expand={() => {
              setExpanded(true)
            }}
            expanded={expanded}
            offerTitle='Frontend Developer'
            postedBy='p/Garena'
            space='s/ComputerScience'
            workplace='Garena'
            location='Hanoi, Vietnam'
            applicantsNo={7}
            recruiting={true}
          />
          <OfferItem
            expand={() => {
              setExpanded(true)
            }}
            expanded={expanded}
            offerTitle='Frontend Developer'
            postedBy='p/Garena'
            space='s/ComputerScience'
            workplace='Garena'
            location='Hanoi, Vietnam'
            applicantsNo={7}
            recruiting={false}
          />
          <OfferItem
            expand={() => {
              setExpanded(true)
            }}
            expanded={expanded}
            offerTitle='Frontend Developer'
            postedBy='p/Garena'
            space='s/ComputerScience'
            workplace='Garena'
            location='Hanoi, Vietnam'
            applicantsNo={7}
            recruiting={true}
          />
        </div>
        {expanded && (
          <div className='right'>
            <div className='offer-title'>Frontend Developer</div>
            <div className='general-info'>
              <span className='workplace'>Garena</span>
              <span>&nbsp;·&nbsp;</span>
              <span className='work-location'>Hanoi, Vietnam&nbsp;</span>
              <span className='post-time'></span>
              <span>&nbsp;·&nbsp;</span>
              <span className='number-of-applicants'> 7 applicants</span>
            </div>
            <div className='quasi-general-info'>
              <InfoItem iconName='fa-briefcase' text='Full-time' />
              <InfoItem iconName='fa-clipboard-list' text='s/webdev' />
              <InfoItem iconName='fa-dollar-sign' text='500-2000' />
              <InfoItem iconName='fa-code-branch' text='Content Department' />
            </div>
            <Button
              className={`apply-button ${useExternalURL && 'apply-button-extended'}`}
              variant='contained'
              size='small'
              onClick={() => { !useExternalURL && setDialogOpen(true) }}
              endIcon={useExternalURL && <i className='fas fa-external-link-alt apply-button-end-icon' style={{ color: 'white' }} />}
              href={useExternalURL && 'https://google.com'}
            >
              <div className='button-text'>Apply now</div>
            </Button>
            <ApplyDialog open={dialogOpen} onClose={() => { setDialogOpen(false) }} />
            <div className='main-info'>
              <SubOfferItem
                label='Requirements:'
                content={`· At least 3-year experience in Front-end\n
· Design web (Optional):\n
    + Create good impression by giving well-combined color, logical layout and content to attract the end user\n
    + Solid experience in website design and UI/UX principles\n
· Ability to work independently/ team-work and under high pressures`}
              />
              <SubOfferItem
                label='Benefits:'
                content='· A very attractive salary package
· Open and dynamic working environment
· Attractive income with year bonus
· Extra healthy activities and healthcare program.
'
              />
              <SubOfferItem label='Description:' content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' />
              <SubOfferItem label='How to apply' content='Send CV to garena@email.com' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}