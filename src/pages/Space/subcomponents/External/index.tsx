import { SingleTextInput } from '../../../PageCreator/subcomponents'

interface Props {
  onChange: (newValue: string) => void
}

export const External = (props: Props): JSX.Element => {
  const { onChange } = props
  return (
    <SingleTextInput
      label='Link to Recruitment Form'
      placeholder='Enter the link to your custom recruitment form e.g. Google Forms'
      onChange={(newValue: string) => { onChange(newValue) }}
    />
  )
}