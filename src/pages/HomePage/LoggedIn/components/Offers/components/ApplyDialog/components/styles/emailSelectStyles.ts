import _ from 'lodash'
import { defaultSelectStyles } from '../../../../../../../../PageCreator/subcomponents'

let temp = _.cloneDeep(defaultSelectStyles)
temp.width = '100% !important'
temp['marginRight'] = '2rem !important'

export const emailSelectStyles = temp