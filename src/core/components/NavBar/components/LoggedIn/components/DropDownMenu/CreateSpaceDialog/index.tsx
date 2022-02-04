import { ChangeEvent, useEffect } from 'react'
import _ from 'lodash'
import { Button, Dialog } from '@mui/material'
import { useForm } from '../../../../../../../hooks'
import { FileUploadPrompt } from '../../../../../../../../pages/PageCreator/components'
import { Description } from './Description'
import { useStyles, logoInputStyles } from './style'

interface SpaceCreationFormDefaultValue {
  shortName: string
  fullName: string
  logo: File | null
  description: string
}

interface Props {
  open: boolean
  onClose: () => void
}

export const CreateSpaceDialog = (props: Props): JSX.Element => {
  const { open, onClose } = props
  const spaceCreationFormDefaultValue = {
    shortName: '',
    fullName: '',
    logo: null,
    description: ''
  }
  const { formValue, changeFormValue, resetFormValue, resetField } = useForm<SpaceCreationFormDefaultValue>(spaceCreationFormDefaultValue)
  const classes = useStyles()
  return (
    <Dialog
      className={classes['create-space-dialog']}
      open={open}
      onClose={onClose}
    >
      <div className='dialog-content'>
        <div className='dialog-title'>Create a Space</div>
        <div className='actual-content'>
          <div className='text-input-section'>
            <div className='section-name'>Short Name</div>
            <div className='section-description'>Short names including capitalization cannot be changed.</div>
            <input type='text' className='short-name-input' spellCheck={false} onChange={(e: ChangeEvent<HTMLInputElement>) => { changeFormValue('shortName', e.target.value) }} />
            <div className='characters-remaining'>30 Characters Remaining</div>
          </div>
          <div className='text-input-section'>
            <div className='section-name' style={{ marginTop: '0.75rem' }}>Full Name</div>
            <div className='section-description'>Full names are usually the extended version of the above short name e.g. s/computerscience -&gt;&nbsp;Computer Science</div>
            <input type='text' className='short-name-input' spellCheck={false} placeholder='Full name' onChange={(e: ChangeEvent<HTMLInputElement>) => { changeFormValue('fullName', e.target.value) }} />
            <div className='characters-remaining'>100 Characters Remaining</div>
          </div>
          <FileUploadPrompt
            title='Logo'
            description='300 x 300px recommended. JPGs, JPEGs, and PNGs supported.'
            multiple={false}
            accept='.jpg, .jpeg, .png'
            fileInputID='logo-input'
            onChange={(newValue: File) => { changeFormValue('logo', newValue) }}
            customStyles={logoInputStyles}
          />
          <Description onChange={(newValue: string) => { changeFormValue('description', newValue) }} />
        </div>
        <div className='dialog-end'>
          <Button
            className='create-space-button'
            size='small'
            variant='contained'
          >
            <div className='button-text'>Create Space</div>
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
