import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Field } from '../../../../../../subcomponents'
import { ReactComponent as Pen } from '../../../../../../../../core/media/icons/pen.svg'
import { style } from './style'

export const AboutField = (): JSX.Element => {
  const [status, setStatus] = useState('short')
  const shortText = 'Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.'
  const fullText = 'Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.'
  return (
    <Field title='About' sx={style}>
      <IconButton color='primary' component='span' className='edit-about-button'>
        <Pen className='edit-about-button-icon' />
      </IconButton>
      <div className='text'>
        {
          status == 'short' &&
          shortText
        }
        {
          status == 'full' &&
          fullText
        }
      </div>
      {
        status == 'short' &&
        <div className='more-button' onClick={() => { setStatus('full') }}>... see more</div>
      }
    </Field >
  )
}