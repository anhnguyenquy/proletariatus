import SettingItem from '../SettingItem'
import { useStyles } from './style'

export const General = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes['general']}>
      <SettingItem name='Name' description='Adolf Hitler' type='button' buttonConfig={{
        type: 'outlined',
        text: 'Change',
      }} />
      <SettingItem name='username' description='u/adolf_hitler' type='button' buttonConfig={{
        type: 'outlined',
        text: 'Change',
      }} />
      <SettingItem name='Email Address' description='username@gmail.com' type='button' buttonConfig={{
        type: 'outlined',
        text: 'Change',
      }} />
      <SettingItem name='Phone Number' description='+12345678' type='button' buttonConfig={{
        type: 'outlined',
        text: 'Change',
      }} />
      <SettingItem name='Password' type='button' buttonConfig={{
        type: 'outlined',
        text: 'Change',
      }} />
      <SettingItem name='Language' type='select' selectConfig={{
        options: [
          { display: 'English', value: 'English' },
          { display: 'Vietnamese', value: 'Vietnamese' },
        ],
        value: 'English',
        styles: {
          marginRight: '-1rem !important',
        }
      }} />
      <SettingItem name='Dark Mode' type='switch' switchConfig={{
        value: false
      }} />
    </div>
  )
}