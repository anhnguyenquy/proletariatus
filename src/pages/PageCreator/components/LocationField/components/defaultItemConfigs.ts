import { LocationItemConfig } from '../../interfaces'
import { countryOptions } from '.'

export const defaultItemConfigs: LocationItemConfig[] = [
  {
    label: 'Country',
    type: 'select',
    fieldName: 'country',
    options: countryOptions,
  },
  {
    label: 'City/Province',
    type: 'select',
    fieldName: 'city/province',
    options: [],
  },
  {
    label: 'Street',
    type: 'text',
    fieldName: 'street',
  }
]