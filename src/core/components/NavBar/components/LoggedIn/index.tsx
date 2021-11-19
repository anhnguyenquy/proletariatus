import { ReactComponent as GoogleIcon } from '../../../../../core/media/icons/google.svg'
import { DropDownMenu, SearchInput, Icon } from './components'
import { useStyles } from './style'

interface Props {
	current: string
}
export const LoggedIn = (props: Props) => {
	const { current } = props
	const classes = useStyles()
	return (
		<div className={classes['nav-bar']}>
			<GoogleIcon className='google-icon' />
			<DropDownMenu />
			<div className='left-icons'>
				<Icon
					containerClassName='friends'
					faIconName='fa-user-friends'
					current={current}
				/>
				<Icon
					containerClassName='pages'
					faIconName='fa-flag'
					current={current}
				/>
			</div>
			<SearchInput />
			<div className='right-icons'>
				<Icon
					containerClassName='profile'
					faIconName='fa-user-circle'
					current={current}
				/>
				<Icon
					containerClassName='notifications'
					faIconName='fa-bell'
					current={current}
				/>
				<Icon
					containerClassName='settings'
					faIconName='fa-cog'
					current={current}
				/>
			</div>
		</div>
	)
}
