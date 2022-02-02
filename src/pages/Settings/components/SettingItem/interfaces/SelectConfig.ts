import { SelectOption } from '../../../../PageCreator/subcomponents'

export interface SelectConfig {
  placeholder?: string
  options?: SelectOption[]
  value: string
  onChange?: (newValue: string) => void
  none?: boolean
  MenuProps?: object
  styles?: object
  menuItemStyles?: object
}