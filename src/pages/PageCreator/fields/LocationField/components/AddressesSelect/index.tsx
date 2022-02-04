import { useState, useEffect } from 'react'
import { NestedArrayInput, ItemProps, Address, LocationItemConfig } from '../../../../components'
import { defaultItemConfigs } from '..'
import { countries } from '../../../../../../core/constants'
import { AddressSelect } from '..'
import { defaultItem } from '..'
import _ from 'lodash'

interface Props {
  defaultValues: Address[]
  onChange: (newValue: Address[] | null) => void
}

export const AddressesSelect = (props: Props): JSX.Element => {
  const { defaultValues, onChange } = props
  const [values, setValues] = useState<Address[]>(defaultValues)
  useEffect(() => {
    onChange(values)
  }, [values])
  return (
    <NestedArrayInput<Address>
      label='Addresses'
      defaultConfigItem={defaultItemConfigs}
      itemLabel='Address'
      defaultItem={defaultItem}
      onChange={(newValue: Address[]) => {
        setValues(newValue)
      }}
      customRenderItem={(itemProps: ItemProps<Address>) => {
        return (
          <AddressSelect
            label={itemProps.label}
            defaultValue={itemProps.values}
            onChange={(newValue: Address | null) => {
              itemProps.onItemChange(newValue)
            }}
            onDelete={itemProps.onDelete}
            inArrayInput={true}
          />
        )
      }}
      values={values}
      max={3}
      description="If your page's physical location is located in several addresses, add them here."
    />
  )
}