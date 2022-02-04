import { useState, useEffect, ChangeEvent } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import { SelectOption } from '../../../PageCreator/components'
import { useClasses } from '../../../../core/hooks'
import { useStyles } from './style'

interface Props {
  title: string
  options: SelectOption[]
  onChange: (newValue: string) => void
  hasOther?: boolean
  customStyles?: object
}

export const CheckList = (props: Props): JSX.Element => {
  const { title, options, onChange, hasOther = false, customStyles } = props
  const [value, setValue] = useState<string>('')
  const [otherValue, setOtherValue] = useState<string>('')
  const [otherValueSelected, setOtherValueSelected] = useState(false)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleOtherChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtherValue(e.target.value)
  }
  useEffect(() => {
    if (otherValueSelected) {
      setValue(otherValue)
    }
  }, [otherValue])
  useEffect(() => {
    onChange(value)
  }, [value])
  const classes = useStyles()
  const customClasses = useClasses(customStyles)
  return (
    <div className={customStyles ? customClasses['check-list'] : classes['check-list']}>
      <FormLabel className='title'>{title}</FormLabel>
      <RadioGroup value={value} onChange={handleChange} className='options'>
        {options.map((option) => (
          <FormControlLabel
            className='option'
            value={option.value}
            label={option.display}
            control={<Radio />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.checked) {
                setOtherValueSelected(false)
              }
            }}
          />
        ))}
        {
          hasOther &&
          <FormControlLabel
            className='option'
            value={otherValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { setOtherValueSelected(e.target.checked) }}
            label={
              <div className='other-option'>
                <div className='other-text'>Other: </div>
                <input type='text' spellCheck={false} onChange={handleOtherChange} disabled={!otherValueSelected} />
              </div>
            }
            control={<Radio checked={otherValueSelected} />}
          />
        }
      </RadioGroup>
    </div>
  )
}
