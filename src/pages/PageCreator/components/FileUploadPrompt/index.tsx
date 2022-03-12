import { ChangeEvent, useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import { FileInput } from '../../../../core/components'
import { useStyles } from './style'
import { useClasses } from '../../../../core/hooks'

interface Props {
  title?: string
  description?: string
  multiple: boolean
  accept: string
  fileInputID: string
  onChange: (newValue: File) => void,
  customStyles?: object
}


export const FileUploadPrompt = (props: Props): JSX.Element => {
  const { title, description, multiple, accept, fileInputID, onChange, customStyles } = props
  const [file, setFile] = useState<any>(null)
  const imageRef = useRef(null)
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }
  useEffect(() => {
    onChange(file)
    console.log(file)
    console.log(imageRef)
  }, [file])
  const classes = useStyles()
  const customClasses = useClasses(customStyles)
  return (
    <div className={customStyles ? customClasses['file-upload-prompt'] : classes['file-upload-prompt']}>
      {title && <div className='prompt-title'>{title}</div>}
      <div className={`upload-container ${file && 'uploaded'}`}>
        {/* 
          // TODO: Ava prevew -> react-avatar-edit
        */}
        {
          file ?
            <img src={URL.createObjectURL(file)} className='uploaded-file' ref={imageRef} />
            :
            <>
              <div className='upload-text'>Upload to see preview</div>
              <label htmlFor={fileInputID}>
                <FileInput
                  id={fileInputID}
                  type='file'
                  accept={accept}
                  multiple={multiple}
                  onChange={handleFileUpload}
                />
                <Button className='upload-button' variant='outlined' size='small' component='div'>
                  <div className='button-text'>Choose file</div>
                </Button>
              </label>
            </>
        }
      </div>
      {description && <div className='description'>{description}</div>}

    </div>
  )
}
