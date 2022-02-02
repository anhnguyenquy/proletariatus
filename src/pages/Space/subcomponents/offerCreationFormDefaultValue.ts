import { OfferCreationFormDefaultValue } from '.'
import { defaultItem } from '../../PageCreator/components/LocationField/components'

export const offerCreationFormDefaultValue: OfferCreationFormDefaultValue = {
  offerTitle: '',
  location: defaultItem,
  payRange: '',
  department: '',
  typeOfEmployment: '',
  requirements: '',
  benefits: '',
  skills: [],
  description: '',
  platform: '',
  additionalQuestions: [''],
  external: '',
  custom: ''
}