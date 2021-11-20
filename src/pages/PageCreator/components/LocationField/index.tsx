import { useState, useEffect, useRef } from 'react'
import { Field, NestedArrayInput, NestedArrayItem } from '../components'
import { Address, LocationItemConfig } from '../interfaces'
import { countries } from '../../../../core/helpers'
import { countryOptions, defaultItem, defaultItemConfigs } from './components'
import _ from 'lodash'
import { usePrevious } from '../../../../core/hooks'

export const LocationField = (): JSX.Element => {
  const [singleValue, setSingleValue] = useState<Address | null>(defaultItem)
  const [values, setValues] = useState<Address[] | null>([defaultItem, defaultItem])
  const prevValues = usePrevious(values)
  const initialActiveItemConfigsArray = []
  values.forEach((value) => {
    initialActiveItemConfigsArray.push(defaultItemConfigs)
  })
  const [activeItemConfigsArray, setActiveItemConfigsArray] = useState<
    LocationItemConfig[] | null
  >(initialActiveItemConfigsArray)
  useEffect(() => {
    console.log('abcd')
    const changedItem = _.differenceWith(values, prevValues, _.isEqual)[0]
    const changedItemIndex = values.findIndex(v => {
      return _.isEqual(v, changedItem)
    })
    console.log(changedItemIndex)
    console.log('values: '+values)
    console.log('prevValues: '+prevValues)
    if (changedItem && changedItem.country != '')  {
      console.log(changedItem)
      const provinces = countries.filter(countryObject => countryObject.countryCode == changedItem.country)[0].stateProvinces
      if (provinces != null) {
        const cityOrProvinceOptions = provinces.map(province => {
          return {
            display: province.name,
            value: province.name,
          }
        })
        console.log(activeItemConfigsArray)
        let currentActiveItemConfigsArray = [...activeItemConfigsArray]
        currentActiveItemConfigsArray[changedItemIndex][1].options = cityOrProvinceOptions
        console.log(currentActiveItemConfigsArray)
        setActiveItemConfigsArray(currentActiveItemConfigsArray)
      }
    }
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
