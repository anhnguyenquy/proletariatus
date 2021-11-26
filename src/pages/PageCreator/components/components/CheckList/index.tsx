import { useState, useEffect, ChangeEvent } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { SelectOption } from '../../interfaces'
import { useStyles } from './style'

interface Props {
  title: string
  options: SelectOption[]
  onChange: (newValue: string) => void
}

export const CheckList = (props: Props): JSX.Element => {
  const { title, options, onChange } = props
  const [value, setValue] = useState<string>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    onChange(value)
  }, [value])
  const classes = useStyles()
  return (
    <div className={classes['check-list']}>
      <FormLabel className='title'>{title}</FormLabel>
      <RadioGroup value={value} onChange={handleChange} className='options'>
        {options.map((option) => (
          <FormControlLabel
            className='option'
            value={option.value}
            label={option.display}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </div>
  )
}
