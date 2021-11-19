import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { ThemeProvider } from '@mui/material/styles'
import { PageIdentityField, LocationField, ContactsField, ProfileDetailsField } from './components'
import { theme, NavBar } from '../../core/components'
import { useDeviceBreakPoint, useDocumentTitle, useForm } from '../../core/hooks'
import { ReactComponent as BuildingIcon } from '../../core/media/icons/Building.svg'
import { ReactComponent as ArrowBack } from '../../core/media/icons/ArrowBack.svg'
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
  const history = useHistory()
  const { formValue, changeFormValue, resetFormValue } = useForm({})

  return (
    <ThemeProvider theme={theme}>
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
              onClick={() => {
                history.push('/pages')
              }}
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
        <PageIdentityField />
        <LocationField />
        <ContactsField />
        <ProfileDetailsField />
        <div className='acknowledgement'>
          <Checkbox className='check-box' size='small' />
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
          >
            Create page
          </Button>
        </div>
      </div>
    </ThemeProvider>
  )
}
