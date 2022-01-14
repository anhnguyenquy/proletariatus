import { ChangeEvent, useEffect, useState } from 'react'
import _ from 'lodash'
import { Button } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { useStyles } from './style'

interface Props {
  onChange: (newValue: string[]) => void
}

export const AdditionalQuestions = (props: Props): JSX.Element => {
  const { onChange } = props
  const [questions, setQuestions] = useState<string[]>([''])
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newQuestions = _.cloneDeep(questions)
    newQuestions[index] = e.target.value
    setQuestions(newQuestions)
  }
  const addQuestion = () => {
    if (questions.length < 100) {
      const newQuestions = _.cloneDeep(questions)
      newQuestions.push('')
      setQuestions(newQuestions)
    }
  }
  useEffect(() => {
    onChange(questions)
  }, [questions])
  const classes = useStyles()
  return (
    <div className={classes['additional-questions']}>
      <div className='label'>Additional Questions</div>
      <div className='sub-label'>
        Create specific questions for your applicants (max 100)
      </div>
      <div className='questions'>
        {
          questions.map((question, index) => {
            return (
              <input className='question' type='text' placeholder={`Question ${index + 1}`} spellCheck={false} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)} />
            )
          })
        }
      </div>
      {
        questions.length < 100 &&
        <Button className='add-question-button' variant='outlined' size='small' endIcon={<FaPlus className='end-icon' />} onClick={() => { addQuestion() }}>Add Question</Button>
      }
    </div>
  )
}