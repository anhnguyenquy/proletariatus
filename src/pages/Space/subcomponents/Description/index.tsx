import { useEffect, useState } from 'react'
import { Quill } from '../../../../core/components'
import { useStyles } from './style'

interface Props {
  onChange: (newValue: string) => void
}

export const Description = (props: Props): JSX.Element => {
  const { onChange } = props
  const [value, setValue] = useState('')
  const classes = useStyles()
  useEffect(() => {
    onChange(value) 
  }, [value])
  return (
    <div className={classes['description']}>
      <div className='label'>Description</div>
      <Quill
        defaultValue={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        max={3000} // fix this
      />
      <div className='dezcription'>
        Write a description for your offer (3000 characters remaining)
      </div>
    </div>
  )
}