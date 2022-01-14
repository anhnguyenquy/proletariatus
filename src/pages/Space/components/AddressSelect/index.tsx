import { useState, useEffect } from 'react'
import { NestedArrayItem } from '../../../PageCreator/components/components'
import { Address, LocationItemConfig } from '../../../PageCreator/components/interfaces'
import { defaultItemConfigs } from '../../../PageCreator/components/LocationField/components'
import { countries } from '../../../../core/constants'
import _ from 'lodash'

// @ts-ignore
const customStyles = {
  'nested-array-item': {
    width: '100%',
    '& .item-label': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '-0.2rem',
      '& .label-text': {
        fontSize: '0.7rem',
        marginRight: '0.25rem',
      },
      '& .big-label': {
        color: '#8A8A8A',
        fontSize: '0.8rem',
        fontWeight: 500,
      },
      '& .icon-button': {
        fontSize: '0.6rem',
        width: '1.25rem',
        height: '1.25rem',
        padding: 0,
        '& .fa-trash': {
          color: '#13AA52',
        }
      }
    },
    '& .items': {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }
  },
  menu: {
    maxHeight: '20rem',
    width: '15rem',
  }
}

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
      customStyles={customStyles}
    />
  )
}