import FormHelperText from '@mui/material/FormHelperText'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { ClassNameMap } from '@mui/styles/withStyles'
import { useStyles } from './style'

interface Props {
  label?: string
  placeholder?: string
  description?: string
  onChange: (newValue: string) => void
  customClasses?: ClassNameMap
  maxLength?: number
  minRows?: number
  maxRows?: number
}

export const SingleParagraphInput = (props: Props): JSX.Element => {
  const {
    label,
    placeholder,
    description,
    onChange,
    customClasses,
    maxLength,
    minRows,
    maxRows,
  } = props
  const classes = useStyles()
  return (
    <div
      className={
        customClasses != undefined && customClasses != {}
          ? customClasses['single-paragraph-input']
          : classes['single-paragraph-input']
      }
    >
      {label && <div className='label'>{label}</div>}
      <div
        className='input-container'
        style={
          label != undefined && label != null && label != ''
            ? { marginTop: '0.5rem' }
            : {}
        }
      >
        <TextareaAutosize
          className='input'
          placeholder={placeholder ? placeholder : ''}
          spellCheck={false}
          onChange={(e) => {
            onChange && onChange(e.target.value)
          }}
          maxLength={maxLength}
          minRows={minRows}
          maxRows={maxRows}
        />
      </div>
      {description && (
        <FormHelperText className='description'>{description}</FormHelperText>
      )}
    </div>
  )
}
