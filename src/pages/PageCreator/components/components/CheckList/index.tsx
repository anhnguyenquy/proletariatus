import * as React from 'react'
import { useState } from 'react'
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
}

export const CheckList = (props: Props): JSX.Element => {
  const { title, options } = props
  const [value, setValue] = useState<string>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
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
            sx={{
              
            }}
          />
        ))}
      </RadioGroup>
    </div>
  )
}
