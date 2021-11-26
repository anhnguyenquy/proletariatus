import { makeStyles } from '@mui/styles'
import _ from 'lodash'
import { singleSelectInputStyle } from '../../../../../../../../PageCreator/components/components/SingleSelectInput/style'

let newSingleSelectStyle = _.cloneDeep(singleSelectInputStyle)
newSingleSelectStyle['single-select-input']['width'] = '100%'
newSingleSelectStyle['single-select-input']['margin'] = '1rem 0 0 0 !important'
newSingleSelectStyle['single-select-input']['paddingLeft'] = '2rem'
newSingleSelectStyle['single-select-input']['boxSizing'] = 'border-box'
newSingleSelectStyle['single-select-input']['& .select-container']['marginTop'] = '0rem !important'


export const emailSingleSelectStyles = {
  'single-select-input': newSingleSelectStyle['single-select-input'],
  menu: newSingleSelectStyle.menu
}