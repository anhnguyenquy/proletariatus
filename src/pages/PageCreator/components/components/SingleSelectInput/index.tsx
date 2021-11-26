import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { makeStyles } from '@mui/styles'
import { useClasses } from '../../../../../core/hooks'
import { useStyles } from './style'
import { SelectOption } from '../../interfaces'

export const defaultSelectStyles = {
  width: '13rem',
  fontSize: '0.8rem',
  margin: '0.5rem 0rem 0.75rem 0rem'
}

export const defaultMenuItemStyles = {
  fontSize: '0.8rem',
  boxSizing: 'border-box',
}

interface Props {
  label?: string
  value: string
  options?: SelectOption[]
  valuePrefix?: string
  placeholder?: string
  description?: string
  none?: boolean
  onChange: (newValue: string) => void
  MenuProps?: object
  customStyles?: object
  selectStyles?: object
  menuItemStyles?: object
}

export const SingleSelectInput = (props: Props): JSX.Element => {
  const { label, value, options, valuePrefix, placeholder, description, none = true, onChange, MenuProps, customStyles, selectStyles, menuItemStyles } = props
  const classes = useStyles()
  const customClasses = useClasses(customStyles)
  console.log(customStyles)
  console.log(selectStyles)
  return (
    <div className={customStyles ? customClasses['single-select-input'] : classes['single-select-input']}>
      {
        label && <div className='label'>{label}</div>
      }
      <div className='select-container' style={label ? { marginTop: '0.75rem' } : {}}>
        {valuePrefix && <span className='value-prefix'>{valuePrefix}</span>}
        <Select
          size='small'
          value={placeholder && !value ? placeholder : value}
          onChange={(e: SelectChangeEvent) => {
            onChange(e.target.value)
          }}
          MenuProps={MenuProps ? MenuProps : { className: classes.menu }}
          sx={selectStyles ? selectStyles : defaultSelectStyles}
        >
          {
            placeholder &&
            <MenuItem value={placeholder} disabled
              sx={menuItemStyles ? menuItemStyles : defaultMenuItemStyles}
            >
              <div>{placeholder}</div>
            </MenuItem>
          }
          {
            none &&
            <MenuItem value='' sx={menuItemStyles ? menuItemStyles : defaultMenuItemStyles}>
              <em>None</em>
            </MenuItem>
          }
          {
            options &&
            options.map(option =>
              <MenuItem value={option.value} sx={menuItemStyles ? menuItemStyles : defaultMenuItemStyles}>
                {option.display}
              </MenuItem>
            )
          }
        </Select>
        {
          description && <FormHelperText className='description'>{description}</FormHelperText>
        }
      </div>
    </div>
  )
}
