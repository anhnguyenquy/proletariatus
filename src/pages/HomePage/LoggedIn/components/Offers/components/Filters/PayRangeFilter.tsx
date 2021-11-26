import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
  formValue: any,
  changeFormValue: Function
}

export const PayRangeFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  return (
    <FormControl size='small'>
      <InputLabel sx={{ marginLeft: '0.5rem', fontSize: '0.9rem !important', }}>Pay range</InputLabel>
      <Select
        id='pay-range'
        className='filter'
        label='Pay range'
        value={formValue.employmentType}
        onChange={(e: SelectChangeEvent) => {
          changeFormValue('payRange', e.target.value)
        }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
      </Select>
    </FormControl>
  )
}