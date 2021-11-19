import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useStyles } from './style'

interface Props {
  title?: string
  description?: string
  multiple: boolean
  accept: string
}

const Input = styled('input')({
  display: 'none',
})

export const FileUploadPrompt = (props: Props): JSX.Element => {
  const { title, description, multiple, accept } = props
  const classes = useStyles()
  return (
    <div className={classes['file-upload-prompt']}>
      {title && <div className='title'>{title}</div>}
      <div className='upload-container'>
        <div className='upload-text'>Upload to see preview</div>
        <label htmlFor='file-input'>
          <Input
            id='file-input'
            type='file'
            accept={accept}
            multiple={multiple}
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
