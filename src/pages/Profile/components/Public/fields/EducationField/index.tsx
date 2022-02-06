import { useState } from 'react'
import { IconButton } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Harvard from '../../../../../../core/media/icons/harvard.png'
import InstitutionPlaceholder from '../../../../../../core/media/icons/institution_placeholder.png'
import { Field } from '../../../../subcomponents'
import { Line } from '../../../../../../core/components'
import { ReactComponent as Pen } from '../../../../../../core/media/icons/pen.svg'
import { style } from './style'

export const EducationField = (): JSX.Element => {
  const itemData = [
    {
      icon: Harvard,
      school: 'Harvard University',
      degree: 'Dropped out',
      fieldOfStudy: 'English Language and Literature, General',
      startDate: 'Aug 2020',
      endDate: 'May 2023',
      grade: '11',
      activitiesAndSocieties: 'Secretary-General of the Communist Party\'s Youth, de-facto school\'s dictator, Chairman of the Politburo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      icon: InstitutionPlaceholder,
      school: 'Lakeside School, Seattle',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      grade: '',
      activitiesAndSocieties: '',
      description: ''
    },
    {
      icon: Harvard,
      school: 'Harvard University',
      degree: 'Dropped out',
      fieldOfStudy: 'English Language and Literature, General',
      startDate: 'Aug 2020',
      endDate: 'May 2023',
      grade: '11',
      activitiesAndSocieties: 'Secretary-General of the Communist Party\'s Youth, de-facto school\'s dictator, Chairman of the Politburo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      icon: Harvard,
      school: 'Harvard University',
      degree: 'Dropped out',
      fieldOfStudy: 'English Language and Literature, General',
      startDate: 'Aug 2020',
      endDate: 'May 2023',
      grade: '11',
      activitiesAndSocieties: 'Secretary-General of the Communist Party\'s Youth, de-facto school\'s dictator, Chairman of the Politburo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]
  const [displayingData, setDisplayingData] = useState(itemData.slice(0, 3))
  return (
    <Field title='Education' sx={style}>
      <div className='items'>
        {
          displayingData.map((item, index) => {
            return (
              <>
                <div className='item'>
                  <img src={item.icon} className='icon' />
                  <div className='infos'>
                    <div className='school'>{item.school}</div>
                    {
                      item.degree &&
                      <div className='degree-and-field-of-study'>
                        <span className='degree'>{item.degree}</span>
                        {
                          item.fieldOfStudy &&
                          <>
                            <span className='coma'>,&nbsp;</span>
                            <span className='field-of-study'>{item.fieldOfStudy}</span>
                          </>
                        }
                      </div>
                    }
                    {
                      (item.startDate || item.endDate) &&
                      <div className='date'>
                        {
                          item.startDate && item.endDate ?
                            <>
                              <span className='start-date'>{item.startDate}</span>
                              <span className='hyphen'>&nbsp;-&nbsp;</span>
                              <span className='end-date'>{item.endDate}</span>
                            </>
                            :
                            <>
                              {
                                item.startDate &&
                                <span className='start-date'>{item.startDate}</span>
                              }
                              {
                                item.endDate &&
                                <span className='end-date'>{item.endDate}</span>
                              }
                            </>
                        }
                      </div>
                    }
                    {
                      item.grade &&
                      <div className='grade'>Grade:&nbsp;{item.grade}</div>
                    }
                    {
                      item.activitiesAndSocieties &&
                      <div className='activities-and-societies'>Activities and societies:&nbsp;{item.activitiesAndSocieties}</div>
                    }
                    {
                      item.description &&
                      <div className='description'>{item.description}</div>
                    }
                  </div>
                </div>
                {
                  index != itemData.length - 1 &&
                  <>
                    {
                      itemData.length > displayingData.length ?
                        <>
                          {
                            index != 2 &&
                            <Line className='separator' />
                          }
                        </>
                        :
                        <Line className='separator' />
                    }
                  </>
                }
              </>
            )
          })
        }
      </div>
      {
        itemData.length > displayingData.length &&
        <div className='expand-button' onClick={() => { setDisplayingData(itemData) }}>
          <span className='button-text'>Show more</span>
          <ExpandMoreIcon className='button-icon' />
        </div>
      }
    </Field >
  )
}