import { makeStyles } from '@mui/styles'

export const useClasses = (styles: object) => {
  const useStyles = makeStyles(styles)
  return useStyles()
}