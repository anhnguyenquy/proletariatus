import { useStyles } from './style'

interface Props {
  title: string
  children?: JSX.Element | JSX.Element[] | string
  style?: object
}

export const FieldItem = (props: Props): JSX.Element => {
  const { title, children, style } = props
  const classes = useStyles()
  return (
    <div className={classes['field-item']} style={style}>
      <div className='field-item-title'>{title}</div>
      {children}
    </div>
  )
}