import SettingItem from '../SettingItem'
import { useStyles } from './style'

export const Security = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes['security']}>
      <SettingItem color='red' name='Deactivate account' description="Your account will be disabled and your name and photos will be removed from most things you've shared." type='button' buttonConfig={{
        type: 'text',
        text: 'Deactive',
      }} />
      <SettingItem color='red' name='Delete account' description="Once you delete your account, your account will be deactivated for 30 days before it is permanently deleted." type='button' buttonConfig={{
        type: 'outlined',
        text: 'Delete',
      }} />
    </div>
  )
}