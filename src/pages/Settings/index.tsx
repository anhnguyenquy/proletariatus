import { useState } from 'react'
import { Button } from '@mui/material'
import { useDeviceBreakPoint } from '../../core/hooks'
import { NavBar } from '../../core/components'
import { General, PrivacyAndActivity, Security } from './components'
import {
	useStylesPC,
	useStylesTablet,
	useStylesPhone,
	useStylesExtraSmall,
} from './styles'

export const Settings = (): JSX.Element => {
	const { isPhone, isTablet, isExtraSmall, isPC } = useDeviceBreakPoint()
	const classesPC = useStylesPC()
	// const classesTablet = useStylesTablet()
	// const classesPhone = useStylesPhone()
	// const classesExtraSmall = useStylesExtraSmall()
	const [active, setActive] = useState('general')
	return (
		<div className={classesPC.settings}>
			{/* <div className={
       !(isTablet || isPhone || isExtraSmall)
         ? classesPC.settings
        : !(isPhone || isExtraSmall)
           ? classesTablet.settings
           : !isPhone
             ? classesExtraSmall.settings
             : classesPhone.settings
     }> */}
			<NavBar loggedIn={true} current='settings' />
			<div className='main'>
				<div className='page-title'>User Settings</div>
				<div className='button-container'>
					<Button
						className={`general-button ${active == 'general' ? 'active' : ''}`}
						variant={`${active == 'general' ? 'contained' : 'text'}`}
						onClick={() => { setActive('general') }}
					>
						<div className='button-text'>General</div>
					</Button>
					<Button
						className={`privacy-and-activity-button ${active == 'privacy-and-activity' ? 'active' : ''}`}
						variant={`${active == 'privacy-and-activity' ? 'contained' : 'text'}`}
						onClick={() => { setActive('privacy-and-activity') }}
					>
						<div className='button-text'>Privacy and Activity</div>
					</Button>
					<Button
						className={`security-button ${active == 'security' ? 'active' : ''}`}
						variant={`${active == 'security' ? 'contained' : 'text'}`}
						onClick={() => { setActive('security') }}
					>
						<div className='button-text'>Security</div>
					</Button>
				</div>
				{
					active == 'general' ?
						<General />
						:
						active == 'privacy-and-activity' ?
							<PrivacyAndActivity />
							:
							<Security />
				}
			</div>
		</div>
	)
}