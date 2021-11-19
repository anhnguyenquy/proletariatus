import { useEffect, useState } from 'react'
import { NestedArrayItem } from '..'
import { useStyles } from './style'
import { FaPlusCircle } from '@react-icons/all-files/fa/FaPlusCircle'
import IconButton from '@mui/material/IconButton'

interface ArrayProps<T> {
  values: T[]
  defaultConfigItem: any
  itemConfigs: any[]
  setItemConfigs?: (newValue: any) => void
  label?: string
  itemLabel: string
  defaultItem?: T
  onChange: (newValue: T[]) => void
  max?: number
  description?: string
}

export const NestedArrayInput = <T,>(props: ArrayProps<T>): JSX.Element => {
  const { values, defaultConfigItem, itemConfigs, setItemConfigs, label, itemLabel, defaultItem, onChange, max = 5, description } = props
  const [currentValues, setCurrentValues] = useState(values)
  const updateValues = (itemIndex, fieldName, newValue) => {
    let newValues = [...currentValues]
    newValues[itemIndex] = { ...newValues[itemIndex], [fieldName]: newValue }
    setCurrentValues(newValues)
  }
  const deleteNestedItem = (index: number) => {
    let newValues = [...currentValues]
    newValues.splice(index, 1)
    setCurrentValues(newValues)
  }
  useEffect(() => {
    onChange(currentValues)
  }, [currentValues])
  const handleAddItem = () => {
    setCurrentValues([...currentValues, defaultItem])
    let currentConfig = itemConfigs
    currentConfig.push(defaultConfigItem)
    setItemConfigs(currentConfig)
  }

  const classes = useStyles()
  return (
    <div className={classes['nested-array-input']}>
      {
        label &&
        <div className='label'>{label}</div>
      }
      {currentValues.map((value, index) => (
        <NestedArrayItem<T>
          value={value}
          config={itemConfigs[index]}
          label={`${itemLabel} ${index + 1}`}
          onItemChange={(fieldName, newValue) => {
            updateValues(index, fieldName, newValue)
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
