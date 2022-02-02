import { useState, useEffect, useRef, ChangeEvent, MouseEvent, useLayoutEffect, FormEvent, BaseSyntheticEvent } from 'react'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { MenuList, MenuItem, ClickAwayListener } from '@mui/material'
import _ from 'lodash'
import { skills } from '../../../../core/constants'
import { SelectOption } from '../../../PageCreator/subcomponents'
import { useStyles } from './style'

interface Props {
  onChange: (newValue: string[]) => void
}

export const Skills = (props: Props): JSX.Element => {
  const { onChange } = props
  const [addingSkill, setAddingSkill] = useState(false)
  const [skillInput, setSkillInput] = useState('')
  const [options, setOptions] = useState<SelectOption[]>([])
  const [addedSkills, setAddedSkills] = useState<string[]>([])
  const inputRef = useRef(null)
  const buttonRef = useRef(null)
  const buttonsRef = useRef(null)
  const [inputWidth, setInputWidth] = useState(3.5) // unit is rem
  const [popupTopMargin, setPopupTopMargin] = useState(2.5)
  const [popupLeftMargin, setPopupLeftMargin] = useState(0)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAddingSkill(true)
  }
  const handleDelete = () => {
    setSkillInput('')
    setInputWidth(3.5)
  }
  const handleChange = (e: BaseSyntheticEvent) => {
    const value = e.target.innerText
    const clonedArray = _.cloneDeep(addedSkills)
    clonedArray.push(value)
    setAddedSkills(clonedArray)
    setAddingSkill(false)
    setSkillInput('')
    setOptions([])
  }
  const removeAddedSkill = (index: number) => {
    const clonedArray = _.cloneDeep(addedSkills)
    clonedArray.splice(index, 1)
    setAddedSkills(clonedArray)
  }

  useLayoutEffect(() => {
    if (addingSkill) {
      setPopupTopMargin(2.5 + buttonRef.current.offsetTop / 16)
      setPopupLeftMargin(buttonRef.current.offsetLeft / 16)
    }
  })

  useEffect(() => {
    if (skillInput) {
      const filtered = skills.filter((skill) => skill.includes(skillInput))
      const newList = []
      filtered.forEach((skill) => {
        newList.push({ display: skill, value: skill })
      })
      setOptions(newList.slice(0, 10))
    }
  }, [skillInput])

  useEffect(() => {
    onChange(addedSkills)
  }, [addedSkills])

  const classes = useStyles()
  return (
    <div className={classes['skills']}>
      <div className='label'>Skills</div>
      <div className='sub-label'>
        Add skill keywords to make your offer more visible to the right
        candidates (Select up to 10)
      </div>
      <div className='buttons' ref={buttonsRef}>
        {
          addedSkills &&
          addedSkills.map((skill, index) =>
            <button className='added-skill' onClick={() => { removeAddedSkill(index) }}>
              <div className='button-text'>{skill}</div>
              <FaTimes className='added-skill-icon' />
            </button>
          )
        }
        {
          addedSkills.length <= 10 &&
          <button
            className='add-skill-button'
            onClick={handleClick}
            ref={buttonRef}
          >
            {!addingSkill && <div className='button-text'>Add Skill</div>}
            {
              addingSkill &&
              <input
                className='skill-input'
                style={{ width: `${inputWidth}rem` }}
                ref={inputRef}
                value={skillInput}
                spellCheck={false}
                placeholder='Add Skill'
                type='text'
                autoFocus={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSkillInput(e.target.value)
                  setInputWidth(
                    Math.min(Math.max(e.target.value.length * 0.48, 3.5), 14)
                  )
                }}
              />
            }
            {
              skillInput != '' ? <FaTimes className='button-icon delete' onClick={handleDelete} /> : <FaPlus className='button-icon' />
            }
          </button>
        }
        {
          // TODO: Bring 'popup to the front' and prevent middle content from activating X-scroll
          addingSkill && skillInput &&
          <ClickAwayListener onClickAway={() => {
            setAddingSkill(false)
            setSkillInput('')
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
    </div>
  )
}
