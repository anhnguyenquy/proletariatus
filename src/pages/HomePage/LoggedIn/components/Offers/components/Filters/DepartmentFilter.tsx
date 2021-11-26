import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
  formValue: any,
  changeFormValue: Function
}

export const DepartmentFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  return (
    <FormControl size='small'>
      <InputLabel sx={{ marginLeft: '0.5rem', fontSize: '0.9rem !important' }}>Department</InputLabel>
      <Select
        id='department'
        className='filter'
        label='Department'
        value={formValue.department}
        onChange={(e: SelectChangeEvent) => {
          changeFormValue('department', e.target.value)
        }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'content'}>Content</MenuItem>
        <MenuItem value={'pr'}>PR</MenuItem>
        <MenuItem value={'media'}>Media</MenuItem>
        <MenuItem value={'design'}>Design</MenuItem>
        <MenuItem value={'hr'}>HR</MenuItem>
        <MenuItem value={'event'}>Event</MenuItem>
        <MenuItem value={'tech'}>Technical</MenuItem>
      </Select>
    </FormControl>
  )
}