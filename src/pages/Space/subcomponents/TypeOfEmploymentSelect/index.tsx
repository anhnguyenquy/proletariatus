import { useEffect, useState } from 'react'
import { SingleSelectInput } from '../../../PageCreator/subcomponents'
import { customStyles } from './customStyles'
import _ from 'lodash'

interface Props {
  onChange: (newValue: string) => void
}

export const TypeOfEmploymentSelect = (props: Props): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const { onChange } = props
  useEffect(() => {
    onChange(value)
  }, [value])
  return (
    <SingleSelectInput
      label='What type of employment is this?*'
      value={value}
      options={[{ display: '', value: '' }]}
      placeholder='Choose'
      onChange={(newValue: string) => { setValue(newValue) }}
      customStyles={customStyles}      
    />
  )
}