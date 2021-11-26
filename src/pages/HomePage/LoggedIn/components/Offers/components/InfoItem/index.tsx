import { useStyles } from './style'

interface InfoItemProps {
  iconName: string
  text: string
}

export const InfoItem = (props: InfoItemProps): JSX.Element => {
  const { iconName, text } = props
  const classes = useStyles()
  return (
    <div className={classes['info-item']}>
      <div className='info-item-icon-container'>
        <i className={`fas ${iconName} info-item-icon`} />
      </div>
      <div className='info-text'>{text}</div>
    </div>
  )
}
