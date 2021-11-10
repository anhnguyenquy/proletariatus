import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import OfferItem from './OfferItem'
import { useForm } from '../../../../../core/hooks'
import { CountryFilter, CityProvinceFilter, SkillFilter, DepartmentFilter, EmploymentTypeFilter, PayRangeFilter, KeywordFilter } from './Filters'

export const Offers = (): JSX.Element => {
	const { formValue, changeFormValue, resetFormValue } = useForm({
		department: '',
		employmentType: '',
		payRange: '',
		recruitmentStatus: '',
		country: '',
		province: '',
		skill: '',
		keyword: '',
	})
	return (
		<div className='offers'>
			<div className='filters'>
				<div className='line-one'>
					<CountryFilter formValue={formValue} changeFormValue={changeFormValue} />
					<CityProvinceFilter formValue={formValue} changeFormValue={changeFormValue} />
					<SkillFilter formValue={formValue} changeFormValue={changeFormValue} />
				</div>
				<div className='line-two'>
					<DepartmentFilter formValue={formValue} changeFormValue={changeFormValue} />
					<EmploymentTypeFilter formValue={formValue} changeFormValue={changeFormValue} />
					<PayRangeFilter formValue={formValue} changeFormValue={changeFormValue} />
					<KeywordFilter formValue={formValue} changeFormValue={changeFormValue}/>
					<Button
						className='filter search-button'
						variant='outlined'
						size='small'
						onClick={() => { }}
					>
						<div className='button-text'>Search</div>
					</Button>
				</div>
			</div>
			<div className='content'>
				<div className='title'>Recommended for you</div>
				<OfferItem />
			</div>
		</div>
	)
}
