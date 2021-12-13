import { ChangeEvent } from 'react'
import Button from '@mui/material/Button'
import { FileInput } from '../../../../../core/components'
import { useStyles } from './style'

interface Props {
  title?: string
  description?: string
  multiple: boolean
  accept: string
  fileInputID: string
  onChange: (newValue: File) => void
}


export const FileUploadPrompt = (props: Props): JSX.Element => {
  const { title, description, multiple, accept, fileInputID, onChange } = props
  const classes = useStyles()
  return (
    <div className={classes['file-upload-prompt']}>
      {title && <div className='title'>{title}</div>}
      <div className='upload-container'>
        <div className='upload-text'>Upload to see preview</div>
        <label htmlFor={fileInputID}>
          <FileInput
            id={fileInputID}
            type='file'
            accept={accept}
            multiple={multiple}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { onChange(e.target.files[0]) }}
          />
          <Button className='upload-button' variant='outlined' size='small' component='div'>
            <div className='button-text'>Choose file</div>
          </Button>
        </label>
      </div>
      {description && <div className='description'>{description}</div>}
    </div>
  )
}
