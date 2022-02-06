import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { useForm } from '../../../../../../../core/hooks'
import { OfferItem } from './components'
import { style } from './style'

export const Applied = (): JSX.Element => {
  const { formValue, changeFormValue, resetFormValue } = useForm({
    department: '',
    employmentType: '',
    payRange: '',
    recruitmentStatus: '',
    country: '',
    province: '',
    skill: '',
    keyword: '',
  })
  const [expanded, setExpanded] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const navigate = useNavigate()
  return (
    // @ts-ignore
    <Box className='applied' sx={style}>
      <div className='content'>
        <div className='left'>
          <div className='title'>Your offers (3)</div>
          <OfferItem
            expand={() => {
              navigate('/offer/E8WknMGUTLRZmxDoGwZg')
            }}
            offerTitle='Frontend Developer'
            postedBy='p/Garena'
            space='s/ComputerScience'
            workplace='Garena'
            location='Hanoi, Vietnam'
            applicantsNo={7}
            recruiting={true}
            id='E8WknMGUTLRZmxDoGwZg'
            status='awaiting'
          />
          <OfferItem
            expand={() => {
              navigate('/offer/dvWPkjOeMehdmPf8S1Qs')
            }}
            offerTitle='Frontend Developer'
            postedBy='p/Garena'
            space='s/ComputerScience'
            workplace='Garena'
            location='Hanoi, Vietnam'
            applicantsNo={7}
            recruiting={false}
            id='dvWPkjOeMehdmPf8S1Qs'
            status='accepted'
          />
          <OfferItem
            expand={() => {
              navigate('/offer/jCoe70SmKZT4QEVRexvj')
            }}
            offerTitle='Frontend Developer'
            postedBy='p/Garena'
            space='s/ComputerScience'
            workplace='Garena'
            location='Hanoi, Vietnam'
            applicantsNo={7}
            recruiting={true}
            id='jCoe70SmKZT4QEVRexvj'
            status='rejected'
          />
        </div>
      </div>
    </Box>
  )
}