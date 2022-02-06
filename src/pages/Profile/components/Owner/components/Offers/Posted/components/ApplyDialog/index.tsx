import { ChangeEvent } from 'react'
import _ from 'lodash'
import BillGatesAva from '../../../../../../../../../core/media/bill_gates_ava.png'
import { SingleSelectInput, SingleTextInput } from '../../../../../../../../PageCreator/components'
import { Button, Dialog } from '@mui/material'
import {
	FormInterface,
	emailOptions,
	phoneCodesSelectOptions,
	emailSelectStyles,
	emailSingleSelectStyles,
	countryCodeSelectStyles,
	countryCodeSingleSelectStyles,
	phoneNumberTextStyles,
	additionalQuestionsTextStyles,
	resumeSelectStyles,
	resumeSingleSelectStyles
} from './components'
import { useForm } from '../../../../../../../../../core/hooks'
import { FileInput } from '../../../../../../../../../core/components'
import { useStyles } from './style'

interface Props {
	open: boolean
	onClose: () => void
}

export const ApplyDialog = (props: Props): JSX.Element => {
	const { open, onClose } = props
	const { formValue, changeFormValue, resetFormValue } = useForm<FormInterface>(
		{
			email: '',
			phoneNumber: {
				countryCode: '',
				actualNumber: '',
			},
		}
	)
	const classes = useStyles()
	return (
		<Dialog className={classes['apply-dialog']} open={open} onClose={onClose}>
			<div className='dialog-content'>
				<div className='dialog-title'>Applying to Garena</div>
				<div className='actual-content'>
					<div className='contact-info'>Contact Info</div>
					<div className='user-general-info'>
						<img src={BillGatesAva} className='user-ava' />
						<div className='text-info'>
							<div className='user-name'>Bill Gates</div>
							<div className='--'>--</div>
							<div className='user-location'>
								Seattle, Washington, United States
							</div>
						</div>
					</div>
					<SingleSelectInput
						label='Email Address*'
						options={emailOptions}
						value={formValue.email}
						onChange={(newValue: string) => {
							changeFormValue('email', newValue)
						}}
						customStyles={emailSingleSelectStyles}
						selectStyles={emailSelectStyles}
					/>
					<div className='phone-number'>
						<SingleSelectInput
							label='Phone Country Code*'
							options={phoneCodesSelectOptions}
							value={formValue.phoneNumber.countryCode}
							onChange={(newValue: string) => { changeFormValue('phoneNumber', { ...formValue.phoneNumber, countryCode: newValue }) }}
							customStyles={countryCodeSingleSelectStyles}
							selectStyles={countryCodeSelectStyles}
						/>
						<SingleTextInput
							label='Mobile Phone Number'
							onChange={(newValue: string) => { changeFormValue('phoneNumber', { ...formValue.phoneNumber, actualNumber: newValue }) }}
							customStyles={phoneNumberTextStyles}
						/>
					</div>
					<div className='resume-section'>
						<div className='resume-section-title'>Resume</div>
						<div className='resume-section-instruction'>Choose an existing Resume or upload a new one </div>
						<div className='resume-options'>
							<SingleSelectInput
								placeholder='CS_Resume.pdf'
								options={[
									{ display: 'CS_Resume.pdf', value: 'CS_Resume.pdf' },
									{ display: 'Bio_Resume.pdf', value: 'Bio_Resume.pdf' }
								]}
								value={formValue.phoneNumber.countryCode}
								onChange={(newValue: string) => { changeFormValue('phoneNumber', { ...formValue.phoneNumber, countryCode: newValue }) }}
								customStyles={resumeSingleSelectStyles}
								selectStyles={resumeSelectStyles}
							/>
							<div className='-OR-'>-OR-</div>
							<label htmlFor='file-input'>
								<FileInput
									id='file-input'
									type='file'
									accept='.doc,.docx,.pdf'
									multiple={false}
									onChange={(e: ChangeEvent<HTMLInputElement>) => { console.log(e.target.files[0]) }}
								/>
								<Button className='upload-resume-button' size='small' variant='outlined' component='div'>
									<div className='button-text'>Upload Resume</div>
								</Button>
							</label>
						</div>
						<div className='supported-file-types'>Supported file types: .doc, .docx, .pdf</div>
					</div>
					<div className='additional-questions-section'>
						<div className='additional-questions-section-title'>Additional Questions</div>
						<div className='questions'>
							<SingleTextInput
								label='How many years of work experience do you have using React.js?*'
								onChange={(newValue: string) => { }} //changeFormValue('phoneNumber', { ...formValue.phoneNumber, actualNumber: newValue })
								customStyles={additionalQuestionsTextStyles}
							/>
							<SingleTextInput
								label='How many years of work experience do you have using React.js?*'
								onChange={(newValue: string) => { }} //changeFormValue('phoneNumber', { ...formValue.phoneNumber, actualNumber: newValue })
								customStyles={additionalQuestionsTextStyles}
							/>
						</div>
					</div>
				</div>
				<div className='dialog-end'>
					<Button className='submit-application-button' size='small' variant='contained'>
						<div className='button-text'>Submit Application</div>
					</Button>
				</div>
			</div>
		</Dialog>
	)
}
