import { SelectOption } from '.'

export interface LocationItemConfig {
  label: 'Country' | 'City/Province' | 'Street'
  type: 'select' | 'text'
  fieldName: 'country' | 'city/province' | 'street'
  options?: SelectOption[]
}