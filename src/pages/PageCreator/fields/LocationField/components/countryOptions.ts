import { countries } from '../../../../../core/constants'

const options = []
countries.forEach((countryObject) => {
  options.push({
    display: countryObject.name,
    value: countryObject.countryCode,
  })
})

export const countryOptions = options