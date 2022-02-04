import { useState } from 'react'
import { IconButton } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import BillAndMelinda from '../../../../../../../../core/media/icons/bill_and_melinda.png'
import BreakthroughEnergy from '../../../../../../../../core/media/icons/breakthrough_energy.png'
import Microsoft from '../../../../../../../../core/media/icons/microsoft.png'
import { Field } from '../../../../../../subcomponents'
import { Line } from '../../../../../../../../core/components'
import { ReactComponent as Pen } from '../../../../../../../../core/media/icons/pen.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { style } from './style'

export const ExperienceField = (): JSX.Element => {
  const itemData = [
    {
      icon: BillAndMelinda,
      title: 'Co-chair',
      typeOfEmployment: 'Full-time',
      workplace: 'Bill & Melinda Gates Foundation',
      location: 'Empire State building, NYC, US',
      startDate: 'Aug 2020',
      endDate: 'May 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      icon: BreakthroughEnergy,
      title: 'Founder',
      typeOfEmployment: '',
      workplace: 'Breakthrough Energy',
      location: '',
      startDate: '2015',
      endDate: 'Present',
      description: ''
    },
    {
      icon: Microsoft,
      title: 'Co-founder',
      typeOfEmployment: '',
      workplace: 'Microsoft',
      location: '',
      startDate: '1975',
      endDate: 'Present',
      description: ''
    },
    {
      icon: Microsoft,
      title: 'Co-founder',
      typeOfEmployment: '',
      workplace: 'Microsoft',
      location: '',
      startDate: '1975',
      endDate: 'Present',
      description: ''
    }
  ]
  const [displayingData, setDisplayingData] = useState(itemData.slice(0, 3))
  return (
    <Field title='Experience' sx={style}>
      <IconButton color='primary' component='span' className='add-experience-button'>
        <FaPlus className='add-experience-button-icon' />
      </IconButton>
      <div className='items'>
        {
          displayingData.map((item, index) => {
            return (
              <>
                <div className='item'>
                  <img src={item.icon} className='icon' />
                  <div className='infos'>
                    <div className='title'>{item.title}</div>
                    <div className='workplace-and-type-of-employment'>
                      <span className='worplace'>{item.workplace}</span>
                      {
                        item.typeOfEmployment &&
                        <>
                          <span className='interpunct'>&nbsp;·&nbsp;</span>
                          <span className='type-of-employment'>{item.typeOfEmployment}</span>
                        </>
                      }
                    </div>
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
                      item.location &&
                      <div className='location'>{item.location}</div>
                    }
                    {
                      item.description &&
                      <div className='description'>{item.description}</div>
                    }
                  </div>
                  <IconButton color='primary' component='span' className='edit-experience-button'>
                    <Pen className='edit-experience-button-icon' />
                  </IconButton>
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