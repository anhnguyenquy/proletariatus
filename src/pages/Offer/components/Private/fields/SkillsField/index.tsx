import { useState, useEffect, useRef, ChangeEvent, MouseEvent, useLayoutEffect, BaseSyntheticEvent } from 'react'
import _ from 'lodash'
import { MenuList, MenuItem, ClickAwayListener } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { Field } from '../../../../../Profile/subcomponents'
import { skills } from '../../../../../../core/constants'
import { SelectOption } from '../../../../../PageCreator/components'
import { style } from './style'

// TODO: make the search case-insensitive and highlight the results with the keyword
export const SkillsField = (): JSX.Element => {
  const [addedSkills, setAddedSkills] = useState<string[]>(['Python', 'Java'])

  return (
    <Field title='Skills' sx={style}>
      <div className='skills'>
        {
          addedSkills &&
          addedSkills.map((skill, index) =>
            <div className='added-skill' onClick={() => { }}>
              <div className='added-skill-text'>{skill}</div>
            </div>
          )
        }
      </div>
    </Field>
  )
}