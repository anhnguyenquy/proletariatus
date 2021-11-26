import { useState, useEffect } from 'react'
import { Field, NestedArrayInput, NestedArrayItem } from '../components'
import { Address, LocationItemConfig, Location } from '../interfaces'
import { countries } from '../../../../core/helpers'
import { defaultItem, defaultItemConfigs } from './components'
import _ from 'lodash'
import { usePrevious, useForm } from '../../../../core/hooks'

interface Props {
  onChange: (newValue: Location) => void
}

export const LocationField = (props: Props): JSX.Element => {
  const { onChange } = props
  const [headquarter, setHeadquarter] = useState<Address | null>(defaultItem)
  const [addresses, setAddresses] = useState<Address[] | null>([defaultItem, defaultItem])
  const { formValue, changeFormValue, resetFormValue } = useForm<Location>({
    headquarter: {
      country: '',
      'city/province': '',
      street: '',
    },
    addresses: [
      {
        country: '',
        'city/province': '',
        street: '',
      },
      {
        country: '',
        'city/province': '',
        street: '',
      }
    ]
  })
  useEffect(() => {
    onChange(formValue)
  }, [formValue])
  useEffect(() => {
    changeFormValue('headquarter', headquarter)
  }, [headquarter])
  useEffect(() => {
    changeFormValue('addresses', addresses)
  }, [addresses])
  const prevAddresses = usePrevious(addresses)
  const initialActiveItemConfigsArray = addresses.map(address => {
    return defaultItemConfigs
  })
  const [activeItemConfigsArray, setActiveItemConfigsArray] = useState<LocationItemConfig[][] | null>(initialActiveItemConfigsArray)
  useEffect(() => {
    const changedItem = _.differenceWith(addresses, prevAddresses, _.isEqual)[0]
    const changedItemIndex = addresses.findIndex(address => {
      return _.isEqual(address, changedItem)
    })
    if (changedItem && changedItem.country != '') {
      const provinces = countries.filter(countryObject => countryObject.countryCode == changedItem.country)[0].stateProvinces
      if (provinces != null) {
        const cityOrProvinceOptions = provinces.map(province => {
          return {
            display: province.name,
            value: province.name,
          }
        })
        let currentActiveItemConfigsArray = [...activeItemConfigsArray]
        currentActiveItemConfigsArray[changedItemIndex][1].options = cityOrProvinceOptions
        setActiveItemConfigsArray(currentActiveItemConfigsArray)
      }
    }
  }, [addresses])

  return (
    <Field title='Location'>
      <NestedArrayItem<Address>
        values={headquarter}
        config={defaultItemConfigs}
        label='Headquarter'
        onChange={(newValue: Address | null) => {
          setHeadquarter(newValue)
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
          setAddresses(newValue)
        }}
        values={addresses}
        max={3}
        description="If your page's physical location is located in several addresses, add them here."
      />
    </Field>
  )
}
