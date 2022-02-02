import { useState, useEffect } from 'react'
import _ from 'lodash'
import { useForm } from '../../../../core/hooks'
import { Field, NestedArrayInput, NestedArrayItem, Address, LocationItemConfig, Location } from '../../subcomponents'
import { countries } from '../../../../core/constants'
import { defaultItem, defaultItemConfigs, AddressSelect, AddressesSelect } from './components'

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
    changeFormValue('headquarter', headquarter)
  }, [headquarter])
  useEffect(() => {
    changeFormValue('addresses', addresses)
  }, [addresses])
  useEffect(() => {
    onChange(formValue)
  }, [formValue])

  return (
    <Field title='Location'>
      <AddressSelect
        label='Headquarter'
        defaultValue={headquarter}
        onChange={(newValue: Address | null) => {
          setHeadquarter(newValue)
        }}
        inArrayInput={false}
      />
      <AddressesSelect
        defaultValues={addresses}
        onChange={(newValue: Address[]) => {
          setAddresses(newValue)
        }}
      />
    </Field>
  )
}
