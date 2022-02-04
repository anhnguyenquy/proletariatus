import { useEffect, ChangeEvent } from 'react'
import { useForm } from '../../../../core/hooks'
import { Field, CheckList, SingleSelectInput, defaultSelectStyles, FileUploadPrompt, SingleParagraphInput, ProfileDetails } from '../../components'
import { pageTypeOptions } from './pageTypeOptions'
import { industryOptions } from './industryOptions'
import { selectStyles } from './selectStyles'
import { styles } from '../../components/FileUploadPrompt/style'
import _ from 'lodash'

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
  const clonedStyles = _.cloneDeep(styles)
  clonedStyles['file-upload-prompt'].margin = ' 0 0 0.75rem 0'
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
        fileInputID='logo-input'
        onChange={(newValue: File) => { changeFormValue('logo', newValue) }}
        customStyles={clonedStyles}
      />
      <FileUploadPrompt
        title='Cover Photo'
        description='820 x 360px recommended. JPGs, JPEGs, and PNGs supported.'
        multiple={false}
        accept='.jpg, .jpeg, .png'
        fileInputID='cover-input'
        onChange={(newValue: File) => { changeFormValue('cover', newValue) }}
        customStyles={clonedStyles}
      />
      <SingleParagraphInput
        label='About'
        description='Write a description for your page (3000 characters remaining)'
        onChange={(newValue: string) => { changeFormValue('about', newValue) }}
      />
    </Field>
  )
}
