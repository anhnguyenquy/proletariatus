import { ChangeEvent, useEffect } from 'react'
import Select from 'react-select'
import _ from 'lodash'
import { Button, Dialog } from '@mui/material'
import { useForm } from '../../hooks'
import { GiSelect } from '@react-icons/all-files/gi/GiSelect'
import { useStyles } from './style'
import { SingleTextInput } from '../../../pages/PageCreator/components/components'
import { Quill } from '..'

interface PostCreationFormDefaultValue {
  space: string
  title: string
  content: string
}

interface Props {
  open: boolean
  onClose: () => void
}

export const CreatePostDialog = (props: Props): JSX.Element => {
  const { open, onClose } = props
  const postCreationFormDefaultValue: PostCreationFormDefaultValue = {
    space: '',
    title: '',
    content: ''

  }
  const { formValue, changeFormValue, resetFormValue, resetField } = useForm<PostCreationFormDefaultValue>(postCreationFormDefaultValue)
  const classes = useStyles()
  const options = [
    { value: 's/CompSci', label: 's/CompSci' },
    { value: 's/React', label: 's/React' },
    { value: 's/MongoDB', label: 's/MongoDB' }
  ]
  // TODO: Fix error: unable to close dialog when click outside
  return (
    <Dialog
      className={classes['create-post-dialog']}
      open={open}
      onClose={onClose}
    >
      <div className='dialog-content'>
        <div className='dialog-title'>Create a Post</div>
        <div className='actual-content'>
          <Select className='space-select'
            options={options}
            onChange={(newValue: {
              value: string
              label: string
            }) => { changeFormValue('space', newValue.value) }}
            placeholder={
              <div className={classes['space-select-placeholder']}>
                <GiSelect className='placeholder-icon' />
                <div className='placeholder-text'>Choose a Space</div>
              </div>
            }
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: '#13AA52',
                primary25: '#A6EDCC',
                primary50: '#70E6AF'
              }
            })}
            styles={{
              control: base => ({
                ...base,
                fontFamily: 'Montserrat',
                fontSize: '0.8rem'
              }),
              menu: base => ({
                ...base,
                fontFamily: 'Montserrat',
                fontSize: '0.8rem'
              })
            }}
          />
          <SingleTextInput label='Title*' onChange={(newValue: string) => { changeFormValue('title', newValue) }} />
          <div className='content'>
            <div className='label'>Content</div>
            <Quill
              defaultValue={formValue.content}
              onChange={(newValue) => {
                changeFormValue('content', newValue)
              }}
              max={3000}
            />
            <div className='description'>
              What can applicants gain from your offer? (3000 characters remaining)
            </div>
          </div>
        </div>
        <div className='dialog-end'>
          <Button
            className='post-button'
            size='small'
            variant='contained'
          >
            <div className='button-text'>Post</div>
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
