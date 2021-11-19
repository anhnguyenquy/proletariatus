import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { useStyles } from './style'
import { ClassNameMap } from '@mui/styles/withStyles'
import { SelectOption } from '../../interfaces'

export const defaultSelectStyles = {
  width: '13rem',
  fontSize: '0.8rem',
  margin: '0.5rem 0rem 0.75rem 0rem !important'
}

export const defaultMenuItemStyles = {
  fontSize: '0.8rem',
  boxSizing: 'border-box'
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
  selectStyles?: object
  menuItemStyles?: object
  customClasses?: ClassNameMap
}

export const SingleSelectInput = (props: Props): JSX.Element => {
  const { label, value, options, valuePrefix, placeholder, description, none = true, onChange, MenuProps, selectStyles, menuItemStyles, customClasses } = props
  const classes = useStyles()
  return (
    <div className={customClasses != undefined && customClasses != {} ? customClasses['single-select-input'] : classes['single-select-input']}>
      {
        label && <div className='label'>{label}</div>
      }
      <div className='select-container' style={label != undefined && label != null && label != '' ? { marginTop: '0.75rem' } : {}}>
        {valuePrefix && <span className='value-prefix'>{valuePrefix}</span>}
        <FormControl>
          <Select
            id='select'
            size='small'
            value={placeholder != '' && placeholder != undefined && (value == '' || value == undefined || value == null) ? placeholder : value}
            onChange={(e: SelectChangeEvent) => {
              onChange(e.target.value)
            }}
            MenuProps={MenuProps != undefined && MenuProps != {} ? MenuProps : { className: classes.menu }}
            sx={selectStyles != null && selectStyles != undefined ? selectStyles : defaultSelectStyles}
          >
            {
              placeholder &&
              <MenuItem value={placeholder} disabled
                sx={menuItemStyles != null && menuItemStyles != undefined ? menuItemStyles : defaultMenuItemStyles}
              >
                <div>{placeholder}</div>
              </MenuItem>
            }
            {
              none &&
              <MenuItem value='' sx={menuItemStyles != null && menuItemStyles != undefined ? menuItemStyles : defaultMenuItemStyles}>
                <em>None</em>
              </MenuItem>
            }
            {
              options &&
              options.map(option =>
                <MenuItem value={option.value} sx={menuItemStyles != null && menuItemStyles != undefined ? menuItemStyles : defaultMenuItemStyles}>
                  {option.display}
                </MenuItem>
              )
            }
          </Select>
          {
            description && <FormHelperText className='description'>{description}</FormHelperText>
          }
        </FormControl>
      </div>
    </div>
  )
}
