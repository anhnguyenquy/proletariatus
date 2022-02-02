import { defaultSelectStyles } from '../../subcomponents'
import _ from 'lodash'

let tempSelectStyles = _.cloneDeep(defaultSelectStyles) 
tempSelectStyles.width = '18rem'

export const selectStyles = tempSelectStyles