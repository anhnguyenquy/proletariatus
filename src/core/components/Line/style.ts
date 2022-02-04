import { makeStyles } from '@mui/styles'

export interface Props {
  width?: string | number
  style?: object
  className?: string
}

export const useStyles = makeStyles({
  line: {
    borderBottom: '2px solid #E4E6E6',
    padding: 0,
    width: (props: Props) => `${props.width != undefined && props.width != null ? `${props.width}` : '100%'}`,
  }
})
