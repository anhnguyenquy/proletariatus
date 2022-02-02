import { useState, useEffect } from 'react'
import { SingleSelectInput } from '../../../PageCreator/subcomponents'
import { customStyles } from './customStyles'

interface Props {
  onChange: (newValue: string) => void
}

export const PayRangeSelect = (props: Props): JSX.Element => {
  const { onChange } = props
  const [value, setValue] = useState<string>()
  useEffect(() => {
    onChange(value)
  }, [value])
  return (
    <SingleSelectInput
      label='If your offer has a pay range, select it here'
      value={value}
      options={[{ display: '', value: '' }]}
      placeholder='Choose'
      onChange={(newValue: string) => { setValue(newValue) }}
      customStyles={customStyles}
    />
  )
}