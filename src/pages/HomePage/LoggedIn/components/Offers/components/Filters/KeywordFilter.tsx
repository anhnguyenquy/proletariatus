import TextField from '@mui/material/TextField'

interface Props {
  formValue: any
  changeFormValue: Function
}

export const KeywordFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  return (
    <TextField
      size='small'
      id='keyword'
      className='filter keyword-filter'
      label='Keyword'
      variant='outlined'
      spellCheck={false}
      value={formValue.keyword}
      InputLabelProps={{ style: { fontSize: '0.9rem' } }}
      onChange={(e) => {
        changeFormValue('keyword', e.target.value)
      }}
    />
  )
}
