import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { countries } from '../../../../../../../core/constants'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  menu: {
    maxHeight: '20rem',
    width: '19rem',
  }
})

interface Props {
  formValue: any,
  changeFormValue: Function
}

export const CountryFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  const classes = useStyles()
  return (
    <FormControl size='small'>
      <InputLabel sx={{ marginLeft: '0.5rem', fontSize: '0.9rem !important' }}>Country</InputLabel>
      <Select
        id='country'
        className='filter'
        label='Country'
        value={formValue.country}
        onChange={(e: SelectChangeEvent) => {
          changeFormValue('country', e.target.value)
        }}
        MenuProps={{ className: classes.menu }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {
          countries.map(countryObject => {
            return <MenuItem value={countryObject.countryCode}>{countryObject.name}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}