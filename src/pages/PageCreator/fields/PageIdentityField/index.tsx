import { useEffect } from 'react'
import { Field, SingleTextInput, PageIdentity } from '../../components'
import { useForm } from '../../../../core/hooks'

interface Props {
  onChange: (newValue: PageIdentity) => void
}

export const PageIdentityField = (props: Props): JSX.Element => {
  const { onChange } = props
  const { formValue, changeFormValue, resetFormValue } = useForm<PageIdentity>({
    name: '',
    url: '',
    website: ''
  })
  useEffect(() => {
    onChange(formValue)
  }, [formValue])
  return (
    <Field title='Page Identity'>
      <SingleTextInput label='Name*' onChange={(newValue: string) => { changeFormValue('name', newValue) }} />
      <SingleTextInput
        label='Placeholder public URL*'
        valuePrefix='placeholder.com/p/'
        onChange={(newValue: string) => { changeFormValue('url', newValue) }}
      />
      <SingleTextInput
        label='Website'
        placeholder='Begins with http:// or https:// or www.'
        onChange={(newValue: string) => { changeFormValue('website', newValue) }}
        description='This is a link to your external website.'
      />
    </Field>
  )
}