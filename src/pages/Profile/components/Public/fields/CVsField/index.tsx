import { useState, useEffect, useRef, ChangeEvent, MouseEvent, useLayoutEffect, BaseSyntheticEvent } from 'react'
import _ from 'lodash'
import { MenuList, MenuItem, ClickAwayListener } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { Field } from '../../../../subcomponents'
import { skills } from '../../../../../../core/constants' // TODO: Delete this later
import { SelectOption } from '../../../../../PageCreator/components'
import { style } from './style'

// TODO: make the search case-insensitive and highlight the results with the keyword
// TODO: Enable CV upload
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