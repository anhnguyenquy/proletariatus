import { singleTextInputStyle } from '../../../../../../../../PageCreator/components/SingleTextInput/style'
import _ from 'lodash'

let temp = _.cloneDeep(singleTextInputStyle)
temp['single-text-input'].margin = '0rem 0rem 0rem auto !important'
temp['single-text-input']['height'] = '100%'
temp['single-text-input']['width'] = '100%'

export const additionalQuestionsTextStyles = temp

