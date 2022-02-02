import { useEffect } from 'react'
import _ from 'lodash'
import { Button, Dialog } from '@mui/material'
import { SingleTextInput, Address } from '../../../PageCreator/subcomponents'
import {
  AddressSelect,
  PayRangeSelect,
  DepartmentSelect,
  TypeOfEmploymentSelect,
  Requirements,
  Skills,
  Benefits,
  Description,
  RecruitmentPlatform,
  AdditionalQuestions,
  External,
  Custom,
  OfferCreationFormDefaultValue,
  offerCreationFormDefaultValue
} from '..'
import { useForm } from '../../../../core/hooks'
import { useStyles } from './style'


interface Props {
  open: boolean
  onClose: () => void
}

export const CreateOfferDialog = (props: Props): JSX.Element => {
  const { open, onClose } = props
  const { formValue, changeFormValue, resetFormValue, resetField } = useForm<OfferCreationFormDefaultValue>(offerCreationFormDefaultValue)
  const classes = useStyles()
  useEffect(() => {
    switch (formValue.platform) {
      case 'placeholder':
        resetField('external')
        resetField('custom')
        break
      case 'external':
        resetField('custom')
        resetField('additionalQuestions')
        break
      case 'custom':
        resetField('external')
        resetField('additionalQuestions')
        break
      default:
      // can't reach this
    }
  }, [formValue.platform])
  return (
    <Dialog
      className={classes['create-offer-dialog']}
      open={open}
      onClose={onClose}
    >
      <div className='dialog-content'>
        <div className='dialog-title'>Create Offer</div>
        <div className='actual-content'>
          {/* 
          // TODO: Fix Quill (max characters and spacing issues)
          */}
          <SingleTextInput
            label='Offer Title*'
            onChange={(newValue: string) => { changeFormValue('offerTitle', newValue) }}
          />
          <AddressSelect
            label='Location'
            defaultValue={formValue.location}
            onChange={(newValue: Address | null) => {
              changeFormValue('location', newValue)
            }}
            inArrayInput={false}
          />
          <PayRangeSelect onChange={(newValue: string) => { changeFormValue('payRange', newValue) }} />
          <DepartmentSelect onChange={(newValue: string) => { changeFormValue('department', newValue) }} />
          <TypeOfEmploymentSelect onChange={(newValue: string) => { changeFormValue('typeOfEmployment', newValue) }} />
          <Requirements onChange={(newValue: string) => { changeFormValue('requirements', newValue) }} />
          <Benefits onChange={(newValue: string) => { changeFormValue('benefits', newValue) }} />
          <Skills onChange={(newValue: string[]) => { changeFormValue('skills', newValue) }} />
          <Description onChange={(newValue: string) => { changeFormValue('description', newValue) }} />
          <RecruitmentPlatform
            onChange={(newValue: string) => changeFormValue('platform', newValue)}
          />
          {formValue.platform == 'placeholder' && <AdditionalQuestions onChange={(newValue: string[]) => { changeFormValue('additionalQuestions', newValue) }} />}
          {formValue.platform == 'external' && <External onChange={(newValue: string) => { changeFormValue('external', newValue) }} />}
          {formValue.platform == 'custom' && <Custom onChange={(newValue: string) => { changeFormValue('custom', newValue) }} />}
        </div>
        <div className='dialog-end'>
          <Button
            className='post-offer-button'
            size='small'
            variant='contained'
          >
            <div className='button-text'>Post Offer</div>
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
