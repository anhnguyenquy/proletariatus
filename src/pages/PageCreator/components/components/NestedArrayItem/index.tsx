import { useState, useEffect } from 'react'
import { FaTrash } from '@react-icons/all-files/fa/FaTrash'
import { SingleTextInput, SingleSelectInput } from '..'
import { SelectOption } from '../../interfaces'
import { useStyles } from './style'
import { singleTextInputStyle } from '../SingleTextInput/style'
import { defaultSelectStyles } from '../SingleSelectInput'
import IconButton from '@mui/material/IconButton'
import { ClassNameMap } from '@mui/styles/withStyles'
import { useClasses } from '../../../../../core/hooks'
import _ from 'lodash'

let newSelectStyles = _.cloneDeep(defaultSelectStyles)
newSelectStyles.margin = '0 !important'

interface ItemConfig {
  label?: string
  type: 'text' | 'select'
  fieldName: string
  options?: SelectOption[]
}

interface ItemProps<T> {
  values: T
  config: ItemConfig[]
  label?: string
  onChange?: (newValue: T | null) => void
  onItemChange?: (fieldName: string, newValue: T) => void
  onDelete?: () => void
  inArrayInput: boolean
  customStyles?: object
}

export const NestedArrayItem = <T,>(props: ItemProps<T>): JSX.Element => {
  const { values, config, label, onChange, onItemChange, onDelete, inArrayInput, customStyles } = props
  const [itemValues, setItemValues] = useState<T>(values)
  const updateItemValues = (fieldName: string, newValue: string | number) => {
    let currentItemValues = { ...itemValues }
    currentItemValues[`${fieldName}`] = newValue
    setItemValues(currentItemValues)
  }
  useEffect(() => {
    // onChangez(itemValues)
    console.log("hello")
  }, [itemValues])
  const customClasses = useClasses(customStyles)
  const classes = useStyles()
  return (
    <div className={customStyles ? customClasses['nested-array-item'] : classes['nested-array-item']}>
      {
        label &&
        <div className='item-label'>
          <span className={`label-text ${!inArrayInput && 'big-label'}`}>{label}</span>
          {
            inArrayInput &&
            <IconButton className='icon-button' onClick={() => { onDelete() }} size='small'>
              <FaTrash className='fa-trash' />
            </IconButton>
          }
        </div>
      }
      <div className='items'>
        {config.map(subItemConfig => (
          <>
            {subItemConfig.type == 'text' && (
              <SingleTextInput
                placeholder={subItemConfig.label}
                onChange={newValue => {
                  if (inArrayInput) {
                    onItemChange(subItemConfig.fieldName, newValue as any)
                  }
                  else {
                    updateItemValues(subItemConfig.fieldName, newValue)
                  }
                }}
              />
            )}
            {subItemConfig.type == 'select' && (
              <SingleSelectInput
                value={values[subItemConfig.fieldName]}
                options={subItemConfig.options}
                placeholder={subItemConfig.label}
                onChange={newValue => {
                  if (inArrayInput) {
                    onItemChange(subItemConfig.fieldName, newValue as any)
                  }
                  else {
                    updateItemValues(subItemConfig.fieldName, newValue)
                  }
                }}
                selectStyles={newSelectStyles}
              />
            )}
          </>
        ))}
      </div>
    </div>
  )
}
