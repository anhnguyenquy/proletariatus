import Box from '@mui/material/Box'
import { useStyles } from './style'

interface Props {
  title: string
  children?: JSX.Element | JSX.Element[] | string
  sx?: object
}

export const Field = (props: Props): JSX.Element => {
  const { title, children, sx } = props
  const classes = useStyles()
  return (
    <Box className={classes.field} sx={sx}>
      <div className='title'>{title}</div>
      {children}
    </Box>
  )
}