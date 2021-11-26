import SettingItem from '../SettingItem'
import { useStyles } from './style'

const generalSelectOptions = [
  { display: 'Everyone', value: 'Everyone' },
  { display: 'Connections only', value: 'Connections only' },
  { display: 'Followers only', value: 'Followers only' },
  { display: 'Only me', value: 'Only me' }
]

export const PrivacyAndActivity = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes['privacy-and-activity']}>
      <SettingItem name='Who can view your connections?' type='select' selectConfig={{
        options: generalSelectOptions,
        value: 'Everyone',
        styles: {
          width: '10rem',
          marginRight: '-2rem !important',
        }
      }} />
      <SettingItem name='Who can view your followers?' type='select' selectConfig={{
        options: generalSelectOptions,
        value: 'Only me',
        styles: {
          width: '10rem',
          marginRight: '-2rem !important',
        }
      }} />
      <SettingItem name='Who can view users that you follow?' type='select' selectConfig={{
        options: generalSelectOptions,
        value: 'Followers only',
        styles: {
          width: '10rem',
          marginRight: '-2rem !important',
        }
      }} />
      <SettingItem name='Who can view pages that you follow?' type='select' selectConfig={{
        options: generalSelectOptions,
        value: 'Connections only',
        styles: {
          width: '10rem',
          marginRight: '-2rem !important',
        }
      }} />
      <SettingItem name='Who can view spaces that you follow?' type='select' selectConfig={{
        options: generalSelectOptions,
        value: 'Only me',
        styles: {
          width: '10rem',
          marginRight: '-2rem !important',
        }
      }} />
      <SettingItem name='Blocked users' description="Once you've blocked an user, that user can no longer view your profile (including your posts, comments, and offers), tag you, or interact with your profile in anyway." type='button' buttonConfig={{
        type: 'text',
        text: 'Edit',
      }} />
      <SettingItem name='Auto-follow' description='Automatically follow those connected with you' type='switch' switchConfig={{
        value: true
      }} />
    </div>
  )
}