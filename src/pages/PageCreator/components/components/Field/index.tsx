import { useStyles } from './style'

interface Props {
  title: string
  children?: JSX.Element | JSX.Element[] | string
  style?: object
}

export const Field = (props: Props): JSX.Element => {
  const { title, children, style } = props
  const classes = useStyles()
  return (
    <div className={classes.field} style={style}>
      <div className='title'>{title}</div>
      {children}
    </div>
  )
}