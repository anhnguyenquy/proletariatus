import { makeStyles } from '@mui/styles'
import _ from 'lodash'
import { singleSelectInputStyle } from '../../../../../../../../../../PageCreator/components/SingleSelectInput/style'

let newSingleSelectStyle = _.cloneDeep(singleSelectInputStyle)
newSingleSelectStyle['single-select-input']['width'] = '22rem'
newSingleSelectStyle['single-select-input']['margin'] = '0rem'
newSingleSelectStyle['single-select-input']['height'] = '100%'
newSingleSelectStyle['single-select-input']['& .select-container']['margin'] = '0rem !important'
newSingleSelectStyle['single-select-input']['boxSizing'] = 'border-box'

export const countryCodeSingleSelectStyles = {
  'single-select-input': newSingleSelectStyle['single-select-input'],
  menu: newSingleSelectStyle.menu
}