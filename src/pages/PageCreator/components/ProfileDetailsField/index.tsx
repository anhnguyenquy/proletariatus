import { useEffect, ChangeEvent } from 'react'
import { useForm } from '../../../../core/hooks'
import { Field, CheckList, SingleSelectInput, defaultSelectStyles, FileUploadPrompt, SingleParagraphInput } from '../components'
import { ProfileDetails } from '../interfaces'
import { pageTypeOptions } from './pageTypeOptions'
import { industryOptions } from './industryOptions'
import { selectStyles } from './selectStyles'

interface Props {
  onChange: (newValue: ProfileDetails) => void
}

export const ProfileDetailsField = (props: Props): JSX.Element => {
  const { onChange } = props
  const { formValue, changeFormValue, resetFormValue } = useForm<ProfileDetails>({
    description: '',
    industry: '',
    logo: null,
    cover: null,
    about: ''
  })
  useEffect(() => {
    onChange(formValue)
  }, [formValue])
  return (
    <Field title='Profile details'>
      <CheckList
        title='Which of the following best describes your page?'
        options={pageTypeOptions}
        onChange={(newValue: string) => { changeFormValue('description', newValue) }}
      />
      <SingleSelectInput
        label='Select the industry(ies) that your page is related to'
        value={formValue.industry}
        options={industryOptions}
        placeholder='Choose'
        onChange={(newValue: string) => { changeFormValue('industry', newValue) }}
        selectStyles={selectStyles}
      />
      <FileUploadPrompt
        title='Logo'
        description='300 x 300px recommended. JPGs, JPEGs, and PNGs supported.'
        multiple={false}
        accept='.jpg, .jpeg, .png'
        onChange={(newValue: File) => { changeFormValue('logo', newValue) }}
      />
      <FileUploadPrompt
        title='Cover Photo'
        description='820 x 360px recommended. JPGs, JPEGs, and PNGs supported.'
        multiple={false}
        accept='.jpg, .jpeg, .png'
        onChange={(newValue: File) => { changeFormValue('cover', newValue) }}
      />
      <SingleParagraphInput
        label='About'
        description='Write a description for your page (3000 characters remaining)'
        onChange={(newValue: string) => { changeFormValue('about', newValue) }}
      />
    </Field>
  )
}
