import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
  formValue: any,
  changeFormValue: Function
}

export const EmploymentTypeFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  return (
    <FormControl size='small'>
      <InputLabel sx={{ marginLeft: '0.5rem', fontSize: '0.9rem !important', }}>Employment type</InputLabel>
      <Select
        id='employment-type'
        className='filter'
        label='Employment type'
        value={formValue.employmentType}
        onChange={(e: SelectChangeEvent) => {
          changeFormValue('employmentType', e.target.value)
        }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'fullTimeWork'}>Full-time work</MenuItem>
        <MenuItem value={'partTimeWork'}>Part-time work</MenuItem>
        <MenuItem value={'contract'}>Contract</MenuItem>
        <MenuItem value={'temporary'}>Temporary</MenuItem>
        <MenuItem value={'participant'}>Participant</MenuItem>
        <MenuItem value={'volunteer'}>Volunteer</MenuItem>
        <MenuItem value={'eventOrganizer'}>Event organizer</MenuItem>
        <MenuItem value={'internship'}>Internship</MenuItem>
        <MenuItem value={'clubMembership'}>Club membership</MenuItem>
      </Select>
    </FormControl>
  )
}