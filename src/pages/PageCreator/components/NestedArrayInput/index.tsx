import { useEffect, useState } from 'react'
import { NestedArrayItem } from '..'
import { useStyles } from './style'
import { FaPlusCircle } from '@react-icons/all-files/fa/FaPlusCircle'
import IconButton from '@mui/material/IconButton'
import { ItemProps } from '..'
import _ from 'lodash'

interface ArrayProps<T> {
  values: T[]
  defaultConfigItem: any
  itemConfigs?: any[]
  setItemConfigs?: (newValue: any) => void
  label?: string
  itemLabel: string
  defaultItem?: T
  onChange: (newValue: T[]) => void
  max?: number
  description?: string
  customRenderItem?: (props: ItemProps<T>) => JSX.Element | JSX.Element[]
}

export const NestedArrayInput = <T,>(props: ArrayProps<T>): JSX.Element => {
  const { values, defaultConfigItem, itemConfigs, setItemConfigs, label, itemLabel, defaultItem, onChange, max = 5, description, customRenderItem } = props
  const [currentValues, setCurrentValues] = useState(values)
  const updateValues = ({ itemIndex, fieldName, newValue }: { itemIndex: number; fieldName?: string; newValue: T }) => {
    let newValues = _.cloneDeep(currentValues)
    // newValues[itemIndex] = { ...newValues[itemIndex], [fieldName]: newValue }
    newValues[itemIndex] = newValue
    // console.log('Running updateValues')
    setCurrentValues(newValues)
  }
  const deleteNestedItem = (index: number) => {
    let newValues = [...currentValues]
    newValues.splice(index, 1)
    setCurrentValues(newValues)
  }
  useEffect(() => {
    onChange(currentValues)
    // console.log(currentValues)
  }, [currentValues])
  const handleAddItem = () => {
    setCurrentValues([...currentValues, defaultItem])
  }

  const classes = useStyles()

  return (
    <div className={classes['nested-array-input']}>
      {
        label &&
        <div className='label'>{label}</div>
      }
      {currentValues.map((value, index) => (
        customRenderItem ? customRenderItem({
          values: value,
          label: `${itemLabel} ${index + 1}`,
          onItemChange: (newValue) => {
            updateValues({ itemIndex: index, newValue })
          },
          onDelete: () => {
            deleteNestedItem(index)
          },
          inArrayInput: true
        }) :
          <NestedArrayItem<T>
            values={value}
            config={defaultConfigItem}
            label={`${itemLabel} ${index + 1}`}
            onItemChange={(newValue, fieldName) => {
              updateValues({ itemIndex: index, fieldName, newValue })
            }}
            onDelete={() => {
              deleteNestedItem(index)
            }}
            inArrayInput={true}
          />
      ))}
      {
        currentValues.length < max &&
        <IconButton className='icon-button' onClick={() => { handleAddItem() }}>
          <FaPlusCircle className='fa-plus-circle' />
        </IconButton>
      }
      {
        description &&
        <div className='description'>{description}</div>
      }
    </div>
  )
}
