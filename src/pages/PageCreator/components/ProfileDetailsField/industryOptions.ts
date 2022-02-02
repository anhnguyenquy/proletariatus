import { industries } from '../../../../core/constants'
import { SelectOption } from '../../subcomponents'

export const industryOptions: SelectOption[] = industries.map(industry => {
  return { display: industry, value: industry }
})