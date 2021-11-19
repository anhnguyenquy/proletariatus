import { useState, useEffect } from 'react'
import { Field, CheckList, SingleSelectInput, defaultSelectStyles, FileUploadPrompt, SingleParagraphInput } from '../components'
import { SelectOption } from '../interfaces'
import { industries } from '../../../../core/helpers'

let selectStyles = defaultSelectStyles
selectStyles.width = '18rem'

const pageTypeOptions: SelectOption[] = [
  { display: 'Club', value: 'Club' },
  { display: 'Project/Initiative', value: 'Project/Initiative' },
  { display: 'Business', value: 'Business' },
  {
    display: 'Non-profit Organization (NPO)',
    value: 'Non-profit Organization (NPO)',
  },
  {
    display: 'Non-governmental Organization (NGO)',
    value: 'Non-governmental Organization (NGO)',
  },
  { display: 'Other', value: 'Other' },
]

const industryOptions: SelectOption[] = []
industries.forEach((industry) => {
  industryOptions.push({ display: industry, value: industry })
})

export const ProfileDetailsField = (): JSX.Element => {
  const [industry, setIndustry] = useState('')
  return (
    <Field title='Profile details'>
      <CheckList
        title='Which of the following best describes your page?'
        options={pageTypeOptions}
      />
      <SingleSelectInput
        label='Select the industry(ies) that your page is related to'
        value={industry}
        options={industryOptions}
        placeholder='Choose'
        onChange={(newValue: string) => { setIndustry(newValue) }}
        selectStyles={selectStyles}
      />
      <FileUploadPrompt
        title='Logo'
        description='300 x 300px recommended. JPGs, JPEGs, and PNGs supported.'
        multiple={false}
        accept='.jpg, .jpeg, .png' 
      />
       <FileUploadPrompt
        title='Cover Photo'
        description='820 x 360px recommended. JPGs, JPEGs, and PNGs supported.'
        multiple={false}
        accept='.jpg, .jpeg, .png' 
      />
      <SingleParagraphInput 
        label='About'
        description='Write a description for your page (3000 characters remaining)'
        onChange={(newValue: string) => {}}
      />
    </Field>
  )
}
