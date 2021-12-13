import { makeStyles } from '@mui/styles'

export const useClasses = (styles) => {
  const useStyles = makeStyles(styles)
  return useStyles()
}