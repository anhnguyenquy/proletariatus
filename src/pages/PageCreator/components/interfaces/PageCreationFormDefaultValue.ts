import { PageIdentity, Location, Contact, ProfileDetails } from '.'

export interface PageCreationFormDefaultValue {
  'page-identity': PageIdentity
  location: Location
  contacts: Contact[]
  'profile-details': ProfileDetails
}