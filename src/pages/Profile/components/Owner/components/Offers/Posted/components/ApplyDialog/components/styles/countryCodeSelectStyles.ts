import _ from 'lodash'
import { defaultSelectStyles } from '../../../../../../../../../../PageCreator/components'

let tempCountryCodeSelectStyles = _.cloneDeep(defaultSelectStyles)
tempCountryCodeSelectStyles.width = '100% !important'

export const countryCodeSelectStyles = tempCountryCodeSelectStyles