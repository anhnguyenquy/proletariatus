import { FaTrash } from '@react-icons/all-files/fa/FaTrash'
import { SingleTextInput, SingleSelectInput } from '..'
import { SelectOption } from '../../interfaces'
import { useStyles, useMenuStyles } from './style'
import { singleTextInputStyle } from '../SingleTextInput/style'
import { singleSelectInputStyle } from '../SingleSelectInput/style'
import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'

singleTextInputStyle['single-text-input'].margin = '0.5rem 0rem 0.75rem 0rem'
const useCustomTextInputStyles = makeStyles(singleTextInputStyle)
singleSelectInputStyle['single-select-input'].margin = '0'
const useCustomSelectInputStyles = makeStyles(singleSelectInputStyle)

interface ItemConfig {
  label?: string
  type: 'text' | 'select'
  fieldName: string
  options?: SelectOption[]
}

interface ItemProps<T> {
  value: T
  config: ItemConfig[]
  label: string
  onItemChange: (fieldName: string, newValue: T) => void
  onDelete?: () => void
  inArrayInput: boolean
}

export const NestedArrayItem = <T,>(props: ItemProps<T>): JSX.Element => {
  const { value, config, label, onItemChange, onDelete, inArrayInput } = props
  const classes = useStyles()
  const menuClasses = useMenuStyles()
  const customTextInputClasses = useCustomTextInputStyles()
  const customSelectInputClasses = useCustomSelectInputStyles()
  return (
    <div className={classes['nested-array-item']}>
      <div className='item-label'>
        <span className={`label-text ${!inArrayInput && 'big-label'}`}>{label}</span>
        {
          inArrayInput &&
          <IconButton className='icon-button' onClick={() => { onDelete() }} size='small'>
            <FaTrash className='fa-trash' />
          </IconButton>
        }
      </div>
      <div className='items'>
        {config.map((subItemConfig) => (
          <>
            {subItemConfig.type == 'text' && (
              <SingleTextInput
                placeholder={subItemConfig.label}
                onChange={(newValue) => {
                  onItemChange(subItemConfig.fieldName, newValue as any)
                }}
                customClasses={customTextInputClasses}
              />
            )}
            {subItemConfig.type == 'select' && (
              <SingleSelectInput
                value={value[subItemConfig.fieldName]}
                options={subItemConfig.options}
                placeholder={subItemConfig.label}
                onChange={(newValue) => {
                  onItemChange(subItemConfig.fieldName, newValue as any)
                }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  )
}
