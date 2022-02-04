import { useState } from 'react'
import { IconButton } from '@mui/material'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import Coursera from '../../../../../../../../core/media/icons/coursera.png'
import Udemy from '../../../../../../../../core/media/icons/udemy.png'
import { Field } from '../../../../../../subcomponents'
import { Line } from '../../../../../../../../core/components'
import { ReactComponent as Pen } from '../../../../../../../../core/media/icons/pen.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { openInNewTab } from '../../../../../../../../core/helpers'
import { style } from './style'

export const LicensesAndCertificationsField = (): JSX.Element => {
  const itemData = [
    {
      icon: Udemy,
      name: 'Python for Data Science and Machine Learning Bootcamp',
      issuingOrganization: 'Udemy',
      issueDate: 'Aug 2020',
      expirationDate: '',
      credentialID: 'UC-242b9dec-8445-4f73-b641-78be2dfbb8f8',
      credentialURL: 'https://www.udemy.com/certificate/UC-242b9dec-8445-4f73-b641-78be2dfbb8f8/'
    },
    {
      icon: Coursera,
      name: 'Python 3 Programming Specialization',
      issuingOrganization: 'Coursera',
      issueDate: 'Aug 2020',
      expirationDate: '',
      credentialID: 'N4Z8AX5Q4DPT',
      credentialURL: 'https://www.coursera.org/account/accomplishments/specialization/certificate/N4Z8AX5Q4DPT'
    },
    {
      icon: Coursera,
      name: 'Python for Everybody',
      issuingOrganization: 'Coursera',
      issueDate: 'Aug 2020',
      expirationDate: '',
      credentialID: 'ZRM3AQQYQJAV',
      credentialURL: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ZRM3AQQYQJAV'
    },
    {
      icon: Coursera,
      name: 'Python for Everybody',
      issuingOrganization: 'Coursera',
      issueDate: 'Aug 2020',
      expirationDate: '',
      credentialID: 'ZRM3AQQYQJAV',
      credentialURL: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ZRM3AQQYQJAV'
    }
  ]
  const [displayingData, setDisplayingData] = useState(itemData.slice(0, 3))
  return (
    <Field title='Licenses & Certifications' sx={style}>
      <IconButton color='primary' component='span' className='add-qualification-button'>
        <FaPlus className='add-qualification-button-icon' />
      </IconButton>
      <div className='items'>
        {
          displayingData.map((item, index) => {
            return (
              <>
                <div className='item'>
                  <img src={item.icon} className='icon' />
                  <div className='infos' onClick={() => { openInNewTab(item.credentialURL) }}>
                    <div className='name'>{item.name}</div>
                    <div className='issuing-organization'>{item.issuingOrganization}</div>
                    {
                      item.issueDate &&
                      <div className='date'>
                        <span className='issue-date'>Issued&nbsp;{item.issueDate}</span>
                        <span className='interpunct'>&nbsp;·&nbsp;</span>
                        <span className='expiration-date'>{item.expirationDate ? item.expirationDate : 'No Expiration Date'}</span>
                      </div>
                    }
                    {
                      item.credentialID &&
                      <div className='credential-id'>Credential UD&nbsp;{item.credentialID}</div>
                    }
                    {
                      item.credentialURL &&
                      <div className='see-credential-button' onClick={() => { openInNewTab(item.credentialURL) }}>See credential</div>
                    }
                  </div>
                  <IconButton color='primary' component='span' className='edit-qualification-button'>
                    <Pen className='edit-qualification-button-icon' />
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