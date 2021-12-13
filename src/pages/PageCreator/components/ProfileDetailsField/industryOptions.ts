import { industries } from '../../../../core/constants'
import { SelectOption } from '../interfaces'

export const industryOptions: SelectOption[] = industries.map(industry => {
  return { display: industry, value: industry }
})