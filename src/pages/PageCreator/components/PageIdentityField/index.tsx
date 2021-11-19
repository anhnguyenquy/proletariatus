import { Field, SingleTextInput } from '../components'

export const PageIdentityField = (): JSX.Element => {
  return (
    <Field title='Page Identity'>
      <SingleTextInput label='Name*' onChange={(newValue: string) => { }} />
      <SingleTextInput
        label='Placeholder public URL*'
        valuePrefix='placeholder.com/p/'
        onChange={(newValue: string) => { }}
      />
      <SingleTextInput
        label='Website'
        placeholder='Begins with http:// or https:// or www.'
        onChange={(newValue: string) => { }}
        description='This is a link to your external website.'
      />
    </Field>
  )
}