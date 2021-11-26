import { SelectOption } from '.'

export interface ContactItemConfig {
  label: 'Email' | 'Phone Number' | 'Description'
  type: 'text' 
  fieldName: 'email' | 'phone' | 'description'
  options?: SelectOption[]
}