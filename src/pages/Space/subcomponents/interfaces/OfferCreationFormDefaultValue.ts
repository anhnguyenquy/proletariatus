import { Address } from '../../../PageCreator/subcomponents'

export interface OfferCreationFormDefaultValue {
  offerTitle: string
  location?: Address | null
  payRange?: string
  department?: string
  typeOfEmployment: string
  requirements?: string
  benefits?: string
  skills?: string[]
  description?: string
  platform: string
  additionalQuestions?: string[]
  external?: string
  custom?: string
}