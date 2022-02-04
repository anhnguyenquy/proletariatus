import { useStyles, Props } from './style'

export const Line = (props: Props): JSX.Element => {
  const { width, style, className } = props
  const classes = useStyles(props)
  return (
    <div className={`${classes.line} ${className}`} style={style} />
  )
}
