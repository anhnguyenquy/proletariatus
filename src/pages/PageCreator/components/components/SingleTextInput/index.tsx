import FormHelperText from '@mui/material/FormHelperText'
import { useStyles } from './style'
import { useClasses } from '../../../../../core/hooks'

interface Props {
  label?: string
  valuePrefix?: string
  placeholder?: string
  description?: string
  onChange: (newValue: string) => void
  customStyles?: object
}

export const SingleTextInput = (props: Props): JSX.Element => {
  const { label, valuePrefix, placeholder, description, onChange, customStyles } = props
  const classes = useStyles()
  const customClasses = useClasses(customStyles)
  console.log(classes)
  console.log(customClasses)
  return (
    <div className={customStyles ? customClasses['single-text-input'] : classes['single-text-input']}>
      {
        label && <div className='label'>{label}</div>
      }
      <div className='input-container'>
        {
          valuePrefix && <span className='value-prefix'>{valuePrefix}</span>
        }
        <input type='text' placeholder={placeholder ? placeholder : ''} spellCheck={false} onChange={(e) => { onChange && onChange(e.target.value) }} />
      </div>
      {
        description && <FormHelperText className='description'>{description}</FormHelperText>
      }
    </div>
  )
}