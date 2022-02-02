import { departments } from '../../../../core/constants'

const departmentOptions = []
departments.forEach(department => {
  departmentOptions.push({ display: department, value: department })
})

export default departmentOptions