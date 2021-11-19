import { useState, useEffect } from 'react'
import { Field, NestedArrayInput, NestedArrayItem } from '../components'
import { Address, LocationItemConfig } from '../interfaces'
import { countries } from '../../../../core/helpers'
import { countryOptions, defaultItem, defaultItemConfigs } from './components'

export const LocationField = (): JSX.Element => {
  const [singleValue, setSingleValue] = useState<Address | null>(defaultItem)
  const [values, setValues] = useState<Address[] | null>([defaultItem, defaultItem])
  const initialActiveItemConfigsArray = []
  values.forEach((value) => {
    initialActiveItemConfigsArray.push(defaultItemConfigs)
  })
  const [activeItemConfigsArray, setActiveItemConfigsArray] = useState<
    LocationItemConfig[] | null
  >(initialActiveItemConfigsArray)
  useEffect(() => {
    values.forEach(value => {
      if (value.country != '') {
        if (countries.filter(countryObject => countryObject.countryCode == value.country)[0].stateProvinces != null) {
          const cityOrProvinceOptions = []
          countries.filter(countryObject => countryObject.countryCode == value.country)[0].stateProvinces.forEach(province => {
            cityOrProvinceOptions.push({
              display: province.name,
              value: province.name,
            })
          })
          let currentActiveItemConfigsArray = activeItemConfigsArray
          currentActiveItemConfigsArray[values.indexOf(value)][1].options = cityOrProvinceOptions
          setActiveItemConfigsArray(currentActiveItemConfigsArray)
        }
      }
    })
  }, [values])
  return (
    <Field title='Location'>
      <NestedArrayItem<Address>
        value={singleValue}
        config={defaultItemConfigs}
        label='Headquarter'
        onItemChange={(fieldName, newValue) => {
          // updateValues(index, fieldName, newValue)
        }}
        inArrayInput={false}
      />
      <NestedArrayInput<Address>
        label='Addresses'
        defaultConfigItem={defaultItemConfigs}
        itemConfigs={activeItemConfigsArray}
        setItemConfigs={setActiveItemConfigsArray}
        itemLabel='Address'
        defaultItem={defaultItem}
        onChange={(newValue: Address[]) => {
          setValues(newValue)
        }}
        values={values}
        max={3}
        description="If your page's physical location is located in several addresses, add them here."
      />
    </Field>
  )
}
