import { useEffect, useState } from 'react'
import { Quill } from '../../../../core/components'
import { useStyles } from './style'

interface Props {
  onChange: (newValue: string) => void
}

export const Custom = (props: Props): JSX.Element => {
  const { onChange } = props
  const [value, setValue] = useState('')
  const classes = useStyles()
  useEffect(() => {
    onChange(value)
  }, [value])
  return (
    <div className={classes['custom']}>
      <div className='label'>How to apply </div>
      <Quill
        defaultValue={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        max={3000}
      />
      <div className='description'>
        Give specific instructions on how to apply for your offer (3000 characters remaining)
      </div>
    </div>
  )
}
