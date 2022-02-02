import _ from 'lodash'
import { defaultSelectStyles } from '../../../../../../../../PageCreator/subcomponents'

let temp = _.cloneDeep(defaultSelectStyles)
temp.width = '13rem !important'
temp.margin = '0rem !important'

export const resumeSelectStyles = temp