import _ from 'lodash'
import { defaultSelectStyles } from '../../../../../../../../PageCreator/subcomponents'

let tempCountryCodeSelectStyles = _.cloneDeep(defaultSelectStyles)
tempCountryCodeSelectStyles.width = '100% !important'

export const countryCodeSelectStyles = tempCountryCodeSelectStyles