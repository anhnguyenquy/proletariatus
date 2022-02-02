import { CheckList } from '..'
import departmentOptions from '../CreateOfferDialog/departmentOptions'
import { customStyles } from './customStyles'

interface Props {
  onChange: (newValue: string) => void
}

export const DepartmentSelect = (props: Props): JSX.Element => {
  const { onChange } = props
  return (
    <CheckList
      title='What department is this offer in in your organization (if any)?'
      options={departmentOptions}
      onChange={(newValue: string) => { onChange(newValue) }}
      hasOther={true}
      customStyles={customStyles}
    />
  )
}