import { useState, useEffect, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { PageIdentityField, LocationField, ContactsField, ProfileDetailsField } from './components'
import { NavBar } from '../../core/components'
import { useDeviceBreakPoint, useDocumentTitle, useForm } from '../../core/hooks'
import { ReactComponent as BuildingIcon } from '../../core/media/icons/Building.svg'
import { ReactComponent as ArrowBack } from '../../core/media/icons/ArrowBack.svg'
import { pageCreationFormDefaultValue } from './components/components'
import { PageIdentity, Location, Contact, ProfileDetails, PageCreationFormDefaultValue } from './components/interfaces'
import {
  useStylesPC,
  //   useStylesTablet,
  //   useStylesPhone,
  //   useStylesExtraSmall,
} from './styles'

export const PageCreator = (): JSX.Element => {
  const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint()
  const classesPC = useStylesPC()
  //   const classesTablet = useStylesTablet();
  //   const classesPhone = useStylesPhone();
  //   const classesExtraSmall = useStylesExtraSmall();
  useDocumentTitle('Create a Page | Placeholder')
  const navigate = useNavigate()
  const { formValue, changeFormValue, resetFormValue } = useForm<PageCreationFormDefaultValue>(pageCreationFormDefaultValue)
  const [verified, setVerified] = useState(false)

  return (
    <div className={classesPC['page-creator']}>
      {/* <div
        className={
          !(isTablet || isPhone || isExtraSmall)
            ? classesPC['page-manager']
            : !(isPhone || isExtraSmall)
            ? classesTablet['page-manager']
            : !isPhone
            ? classesExtraSmall['page-manager']
            : classesPhone['page-manager']
        }
      > */}
      <NavBar loggedIn={true} current='pages' />
      <div className='top-section'>
        <div className='button-container'>
          <Button
            variant='text'
            startIcon={<ArrowBack className='arrow-back' />}
            className='back-button'
            href='/pages'
          >
            Back
          </Button>
        </div>
        <div className='decoration'>
          <BuildingIcon className='building-icon' />
          <div className='text'>
            Let's get started with a few details about your page.
          </div>
        </div>
      </div>
      <PageIdentityField onChange={(newValue: PageIdentity) => { changeFormValue('page-identity', newValue) }} />
      <LocationField onChange={(newValue: Location) => { changeFormValue('location', newValue) }} />
      <ContactsField onChange={(newValue: Contact[] | null) => { changeFormValue('contacts', newValue) }} />
      <ProfileDetailsField onChange={(newValue: ProfileDetails) => { changeFormValue('profile-details', newValue) }} />
      <div className='acknowledgement'>
        <Checkbox className='check-box' size='small' onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setVerified(e.target.checked)
        }} />
        <div className='text'>
          I verify that I am an authorized representative of this organization and have the right to act on its behalf in the creation and management of this page. The organization and I agree to the additional <span>terms</span> for Pages.
        </div>
      </div>
      <div className='create-page-button-container'>
        <Button
          variant='outlined'
          className='create-page-button'
          onClick={() => { }}
          size='small'
          disabled={!verified}
          sx={!verified && { border: '2px solid #c1bcc4 !important' }}
        >
          Create page
        </Button>
      </div>
    </div>
  )
}
