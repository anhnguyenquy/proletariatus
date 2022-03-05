import { useState, useEffect, useRef, ChangeEvent, MouseEvent, useLayoutEffect, BaseSyntheticEvent } from 'react'
import Highlighter from 'react-highlight-words'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { MenuList, MenuItem, ClickAwayListener } from '@mui/material'
import _ from 'lodash'
import { Field } from '../../../../../../subcomponents'
import { skills } from '../../../../../../../../core/constants' // TODO: Delete this later
import { SelectOption } from '../../../../../../../PageCreator/components'
import { style } from './style'

// TODO: Enable CV upload
export const CVsField = (): JSX.Element => {
  const [addingCV, setAddingCV] = useState(false)
  const [cvInput, setCVInput] = useState('')
  const [options, setOptions] = useState<SelectOption[]>([])
  const [addedCVs, setAddedCVs] = useState<string[]>(['CS_Resume.pdf', 'PoliSci_Resume.docx'])
  const inputRef = useRef(null)
  const buttonRef = useRef(null)
  const buttonsRef = useRef(null)
  const [inputWidth, setInputWidth] = useState(3.5) // unit is rem
  const [popupTopMargin, setPopupTopMargin] = useState(2.5)
  const [popupLeftMargin, setPopupLeftMargin] = useState(0)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAddingCV(true)
  }
  const handleDelete = () => {
    setCVInput('')
    setInputWidth(3.5)
  }
  const handleChange = (e: BaseSyntheticEvent) => {
    const value = e.target.innerText
    const clonedArray = _.cloneDeep(addedCVs)
    clonedArray.push(value)
    setAddedCVs(clonedArray)
    setAddingCV(false)
    setCVInput('')
    setOptions([])
  }
  const removeAddedCV = (index: number) => {
    const clonedArray = _.cloneDeep(addedCVs)
    clonedArray.splice(index, 1)
    setAddedCVs(clonedArray)
  }

  useLayoutEffect(() => {
    if (addingCV) {
      setPopupTopMargin(2.5 + buttonRef.current.offsetTop / 16)
      setPopupLeftMargin(buttonRef.current.offsetLeft / 16)
    }
  })

  useEffect(() => {
    if (cvInput) {
      const filtered = skills.filter((cv) => cv.includes(cvInput))
      const newList = []
      filtered.forEach((cv) => {
        newList.push({ display: cv, value: cv })
      })
      newList.forEach(option => {
        option.display = <Highlighter
          searchWords={[cvInput]}
          autoEscape={true}
          highlightStyle={{
            backgroundColor: 'transparent',
            fontWeight: 600
          }}
          textToHighlight={option.display}
        />
      })
      setOptions(newList.slice(0, 10))
    }
  }, [cvInput])

  useEffect(() => {
    // onChange(addedCVs)
  }, [addedCVs])

  return (
    <Field title='CVs' sx={style}>
      <div className='buttons' ref={buttonsRef}>
        {
          addedCVs &&
          addedCVs.map((cv, index) =>
            <button className='added-cv' onClick={() => { removeAddedCV(index) }}>
              <div className='button-text'>{cv}</div>
              <FaTimes className='added-cv-icon' />
            </button>
          )
        }
        {
          addedCVs.length <= 10 &&
          <button
            className='add-cv-button'
            onClick={handleClick}
            ref={buttonRef}
          >
            {!addingCV && <div className='button-text'>Add CV</div>}
            {
              addingCV &&
              <input
                className='cv-input'
                style={{ width: `${inputWidth}rem` }}
                ref={inputRef}
                value={cvInput}
                spellCheck={false}
                placeholder='Add CV'
                type='text'
                autoFocus={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCVInput(e.target.value)
                  setInputWidth(
                    Math.min(Math.max(e.target.value.length * 0.48, 3.5), 14)
                  )
                }}
              />
            }
            {
              cvInput != '' ? <FaTimes className='button-icon delete' onClick={handleDelete} /> : <FaPlus className='button-icon' />
            }
          </button>
        }
        {
          addingCV && cvInput &&
          <ClickAwayListener onClickAway={() => {
            setAddingCV(false)
            setCVInput('')
          }}>
            <MenuList className='popup' style={{ top: `${popupTopMargin}rem`, left: `${popupLeftMargin}rem` }}>
              {
                options &&
                options.map(option => {
                  return <MenuItem value={option.value} className='menu-item' onClick={handleChange}>{option.display}</MenuItem>
                })
              }
            </MenuList>
          </ClickAwayListener>
        }
      </div>
    </Field>
  )
}