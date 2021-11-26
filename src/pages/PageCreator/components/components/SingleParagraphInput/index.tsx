import FormHelperText from '@mui/material/FormHelperText'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { makeStyles } from '@mui/styles'
import { useClasses } from '../../../../../core/hooks'
import { useStyles } from './style'

interface Props {
  label?: string
  placeholder?: string
  description?: string
  onChange: (newValue: string) => void
  maxLength?: number
  minRows?: number
  maxRows?: number
  customStyles?: object
}

export const SingleParagraphInput = (props: Props): JSX.Element => {
  const {
    label,
    placeholder,
    description,
    onChange,
    maxLength,
    minRows,
    maxRows,
    customStyles
  } = props
  const classes = useStyles()
  const customClasses = useClasses(customStyles)
  return (
    <div className={customStyles ? customClasses['single-paragraph-input'] : classes['single-paragraph-input']}>
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
