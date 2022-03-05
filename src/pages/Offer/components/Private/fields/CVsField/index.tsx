import { useState } from 'react'
import _ from 'lodash'
import { Field } from '../../../../../Profile/subcomponents'
import { style } from './style'

export const CVsField = (): JSX.Element => {
  const [addedCVs, setAddedCVs] = useState<string[]>(['CS_Resume.pdf', 'PoliSci_Resume.docx'])

  return (
    <Field title='CVs' sx={style}>
      <div className='cvs'>
        {
          addedCVs &&
          addedCVs.map((cv, index) =>
            <button className='added-cv' onClick={() => { }}>
              <div className='added-cv-text'>{cv}</div>
            </button>
          )
        }
      </div>
    </Field>
  )
}