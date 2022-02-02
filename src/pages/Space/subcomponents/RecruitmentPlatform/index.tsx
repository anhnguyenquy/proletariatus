import { useEffect, useState } from 'react'
import { SingleSelectInput } from '../../../PageCreator/subcomponents'

const customStyles = {
  'single-select-input': {
    // margin: '0.75rem 0',
    '& .label': {
      color: '#8A8A8A',
      fontWeight: 500,
      fontSize: '0.8rem',
    },
    '& .select-container': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.5rem !important',
      '& .value-prefix': {
        fontSize: '0.8rem',
        marginRight: '0.25rem'
      },
      '& .MuiInputBase-root': {
        margin: '0 !important'
      },
    },
    '& .description': {
      marginTop: '0.5rem',
      fontSize: '0.65rem'
    }
  },
  menu: {
    maxHeight: '13rem',
    width: '15rem',
  }
}

const options = [
  { display: 'Placeholder', value: 'placeholder' },
  { display: 'Use your own form', value: 'external' },
  { display: 'Custom', value: 'custom' }
]

interface Props {
  onChange: (newValue: string) => void
}

export const RecruitmentPlatform = (props: Props): JSX.Element => {
  const { onChange } = props
  const [value, setValue] = useState<string>('placeholder')
  useEffect(() => {
    onChange(value)
  }, [value])
  return (
    <SingleSelectInput
      label='Recruitment Platform'
      value={value}
      options={options}
      placeholder='Choose'
      onChange={(newValue: string) => { setValue(newValue) }}
      customStyles={customStyles}
      none={false}
    />
  )
}