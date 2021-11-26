import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
  formValue: any,
  changeFormValue: Function
}

export const SkillFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  return (
    <FormControl size='small'>
      <InputLabel sx={{ marginLeft: '0.5rem', fontSize: '0.9rem !important', }}>Skill</InputLabel>
      <Select
        id='skill'
        className='filter'
        label='Skill'
        value={formValue.skill}
        onChange={(e: SelectChangeEvent) => {
          changeFormValue('skill', e.target.value)
        }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
      </Select>
    </FormControl>
  )
}