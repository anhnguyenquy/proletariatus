import ReactQuill from 'react-quill'
import { useEffect, useState, useRef, useCallback } from 'react'
import { Box } from '@mui/material'
import 'react-quill/dist/quill.snow.css'
import { style } from './style'
import { usePrevious } from '../../hooks'

const defaultToolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  // [{ font: [] }],
  ['bold', 'italic', 'underline', 'link'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  // [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'video', 'blockquote', 'code-block'],
  ['clean'],
]

interface Props {
  defaultValue: string
  onChange: (newValue: string) => void
  toolbarOptions?: any
  setCharsRemaining?: (num: number) => void
  max?: number
}

export const Quill = (props: Props): JSX.Element => {
  const { defaultValue, onChange, toolbarOptions, setCharsRemaining, max } = props
  const [quillToolbarOptions, setQuillToolbarOptions] = useState(defaultToolbarOptions)
  const [value, setValue] = useState(defaultValue)
  let quillRef = useRef(null)

  useEffect(() => {
    onChange(value)
    if (toolbarOptions) {
      setQuillToolbarOptions(toolbarOptions)
    }
  }, [value])

  useEffect(() => {
    const editor = quillRef.current.getEditor()
    editor.root.spellcheck = false
  }, [])

  return (
    <Box className='quill-container' sx={style}>
      <ReactQuill
        className='quill'
        value={value}
        onChange={(newValue: string) => {
          setValue(newValue)
        }}
        // onKeyPress={(e) => {
        //   const editor = quillRef.current.getEditor()
        //   // @ts-ignore
        //   const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editor)
        //   // console.log(`\'${unprivilegedEditor.getText()}\'`)
        //   if (max) {
        //     if (unprivilegedEditor.getText().trim().length <= max) {
        //       setValue(unprivilegedEditor.getHTML())
        //       setCharsRemaining(max - unprivilegedEditor.getText().trim().length)
        //     }
        //     else {
        //       e.preventDefault()
        //     }
        //   }
        //   else {
        //     setValue(unprivilegedEditor.getHTML())
        //   }
        // }}
        ref={quillRef}
        modules={{ toolbar: quillToolbarOptions }}
        bounds={'.quill-container'}
      />
    </Box>
  )
}
