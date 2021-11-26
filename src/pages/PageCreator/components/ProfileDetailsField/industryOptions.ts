import { industries } from '../../../../core/helpers'
import { SelectOption } from '../interfaces'

export const industryOptions: SelectOption[] = industries.map(industry => {
  return { display: industry, value: industry }
})