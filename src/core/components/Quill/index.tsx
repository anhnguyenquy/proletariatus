import ReactQuill from 'react-quill'
import { useEffect, useState, useRef } from 'react'
import 'react-quill/dist/quill.snow.css'
import { useStyles } from './style'

interface Props {
  defaultValue: string
  onChange: (newValue: string) => void
  max?: number
}

// TODO: Add image to Quill
export const Quill = (props: Props): JSX.Element => {
  const { defaultValue, onChange, max } = props
  const [value, setValue] = useState(defaultValue)
  const quillRef = useRef(null)
  const classes = useStyles()

  const handleChange = (newValue: string) => {
    if (max) {
      if (newValue.length <= max) {
        setValue(newValue)
      }
    }
    else {
      setValue(newValue)
    }
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <ReactQuill
      className={classes['quill']}
      value={value}
      onChange={handleChange}
      ref={quillRef}
    />
  )
}
