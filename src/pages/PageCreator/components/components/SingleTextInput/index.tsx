import FormHelperText from '@mui/material/FormHelperText'
import { useStyles } from './style'
import { ClassNameMap } from '@mui/styles/withStyles'

interface Props {
  label?: string
  valuePrefix?: string
  placeholder?: string
  description?: string
  onChange: (newValue: string) => void
  customClasses?: ClassNameMap
}

export const SingleTextInput = (props: Props): JSX.Element => {
  const { label, valuePrefix, placeholder, description, onChange, customClasses } = props
  const classes = useStyles()
  return (
    <div className={customClasses != undefined && customClasses != {} ? customClasses['single-text-input'] : classes['single-text-input']}>
      {
        label && <div className='label'>{label}</div>
      }
      <div className='input-container' style={label != undefined && label != null && label != '' ? { marginTop: '0.5rem' } : {}}>
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