import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { countries } from '../../../../../../core/helpers'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  menu: {
    maxHeight: '20rem',
    width: '9rem',
  }
})

interface Props {
  formValue: any,
  changeFormValue: Function
}

export const CityProvinceFilter = (props: Props): JSX.Element => {
  const { formValue, changeFormValue } = props
  const classes = useStyles()
  return (
    <FormControl size='small'>
      <InputLabel sx={{ marginLeft: '0.5rem', fontSize: '0.9rem !important' }}>City/Province</InputLabel>
      <Select
        id='province'
        className='filter'
        label='City/Province'
        value={formValue.province}
        onChange={(e: SelectChangeEvent) => {
          changeFormValue('province', e.target.value)
        }}
        MenuProps={{ className: classes.menu }}
      >
        {
          formValue.country == '' ?
            <MenuItem value=''>
              <em>Select Country first</em>
            </MenuItem>
            :
            countries.filter(countryObject => countryObject.countryCode == formValue.country)[0].stateProvinces != null ?
              countries.filter(countryObject => countryObject.countryCode == formValue.country)[0].stateProvinces.map(province => {
                return <MenuItem value={province.name}>{province.name}</MenuItem>
              })
              :
              <MenuItem value=''>
                <em>No Provinces Available</em>
              </MenuItem>
        }
      </Select>
    </FormControl>
  )
}