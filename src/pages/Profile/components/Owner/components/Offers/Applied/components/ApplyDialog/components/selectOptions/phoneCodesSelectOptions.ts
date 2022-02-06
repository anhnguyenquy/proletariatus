import phoneCodes from '../../../../../../../../../../../core/constants/phoneCodes.json'

const tempPhoneCodesSelectOptions = []
phoneCodes.forEach(item => {
  tempPhoneCodesSelectOptions.push({ display: item, value: item })
})
export const phoneCodesSelectOptions = tempPhoneCodesSelectOptions