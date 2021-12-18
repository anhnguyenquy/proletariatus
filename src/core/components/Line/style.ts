import { makeStyles } from '@mui/styles'

export interface Props {
  width?: string | number
}

export const useStyles = makeStyles({
  line: {
    borderBottom: '2px solid #E4E6E6',
    padding: 0,
    width: (props: Props) => `${props != undefined && props != null && props != {} ? `${props.width}` : '100%'}`,
  }
})
