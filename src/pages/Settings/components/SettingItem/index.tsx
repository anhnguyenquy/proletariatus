import Button from '@mui/material/Button'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import { useStyles } from './style'
import { ButtonConfig, SelectConfig, SwitchConfig } from './interfaces'

export const defaultSelectStyles = {
  minWidth: '8rem',
  fontSize: '0.8rem',
  backgroundColor: 'white',
  '& fieldset': {
    border: '2px solid #13AA52 !important'
  }
}

export const defaultMenuItemStyles = {
  fontSize: '0.8rem',
  boxSizing: 'border-box',
}

interface Props {
  name: string
  description?: string
  type: 'button' | 'select' | 'switch'
  buttonConfig?: ButtonConfig
  selectConfig?: SelectConfig
  switchConfig?: SwitchConfig
  color?:
  | 'inherit'
  | 'red'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'lightBackgroundPrimary'
}

export default function SettingItem(props: Props): JSX.Element {
  const {
    name,
    description,
    type,
    buttonConfig,
    selectConfig,
    switchConfig,
    color = 'primary',
  } = props
  const classes = useStyles()
  return (
    <div className={classes['setting-item']}>
      <div className='name-and-description'>
        <div className='setting-name'>{name}</div>
        {description && (
          <div className='setting-description'>{description}</div>
        )}
      </div>
      {type == 'button' && (
        <Button
          className={`button ${buttonConfig.type}`}
          color={color}
          variant={buttonConfig.type}
          onClick={buttonConfig.onClick}
          sx={
            buttonConfig.type == 'outlined' &&
            {
              border: `2px solid ${color == 'red' ? '#F85149' : '#13AA52'} !important`,
              '&:hover': {
                border: `2px solid ${color == 'red' ? '#F85149' : '#13AA52'} !important`,
              }
            }}
        >
          <div className='button-text'>{buttonConfig.text}</div>
        </Button>
      )}
      {type == 'select' && (
        <>
          <Select
            className='select'
            size='small'
            value={
              selectConfig.placeholder && !selectConfig.value
                ? selectConfig.placeholder
                : selectConfig.value
            }
            onChange={(e: SelectChangeEvent) => {
              selectConfig.onChange && selectConfig.onChange(e.target.value)
            }}
            MenuProps={
              selectConfig.MenuProps
                ? selectConfig.MenuProps
                : { className: classes.menu }
            }
            sx={selectConfig.styles ? { ...selectConfig.styles, ...defaultSelectStyles } : defaultSelectStyles}
          >
            {selectConfig.placeholder && (
              <MenuItem
                value={selectConfig.placeholder}
                disabled
                sx={
                  selectConfig.menuItemStyles
                    ? selectConfig.menuItemStyles
                    : defaultMenuItemStyles
                }
              >
                <div>{selectConfig.placeholder}</div>
              </MenuItem>
            )}
            {selectConfig.none && (
              <MenuItem
                value=''
                sx={
                  selectConfig.menuItemStyles
                    ? selectConfig.menuItemStyles
                    : defaultMenuItemStyles
                }
              >
                <em>None</em>
              </MenuItem>
            )}
            {selectConfig.options &&
              selectConfig.options.map((option) => (
                <MenuItem
                  value={option.value}
                  sx={
                    selectConfig.menuItemStyles
                      ? selectConfig.menuItemStyles
                      : defaultMenuItemStyles
                  }
                >
                  {option.display}
                </MenuItem>
              ))}
          </Select>
        </>
      )}
      {type == 'switch' && (
        <Switch
          className='switch'
          defaultChecked={switchConfig.value}
          size='small'
        />
      )}
    </div>
  )
}
