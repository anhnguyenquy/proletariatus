import { useState, useEffect } from 'react'
import { NestedArrayItem, Address, LocationItemConfig } from '../../../../subcomponents'
import { defaultItemConfigs } from '..'
import { countries } from '../../../../../../core/constants'
import _ from 'lodash'

interface Props {
  label: string
  onChange: (newValue: Address | null) => void
  onDelete?: () => void
  inArrayInput: boolean
  defaultValue: Address | null
}

export const AddressSelect = (props: Props): JSX.Element => {
  const { label, onChange, inArrayInput, defaultValue, onDelete } = props
  const [values, setValues] = useState<Address | null>(defaultValue)
  const [itemConfigs, setItemConfigs] = useState<LocationItemConfig[]>(defaultItemConfigs)
  useEffect(() => {
    onChange(values)
  }, [values])
  useEffect(() => {
    if (values.country) {
      const provinces = countries.filter(countryObject => countryObject.countryCode == values.country)[0].stateProvinces
      if (provinces != null) {
        const cityOrProvinceOptions = provinces.map(province => {
          return {
            display: province.name,
            value: province.name,
          }
        })
        let temp = _.cloneDeep(itemConfigs)
        temp[1].options = cityOrProvinceOptions
        setItemConfigs(temp)
      }
    }
  }, [values.country])
  return (
    <NestedArrayItem<Address>
      values={values}
      config={itemConfigs}
      label={label}
      onChange={(newValue: Address | null) => {
        setValues(newValue)
      }}
      onDelete={onDelete}
      inArrayInput={inArrayInput}
    />
  )
}