import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BiFlag } from '@react-icons/all-files/bi/BiFlag'
import { FaCircle } from '@react-icons/all-files/fa/FaCircle'
import { ThemeProvider } from '@mui/material/styles'
import fptLogo from '../../../../core/media/icons/page-logo.png'
import { useStyles } from './style'

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    lightBackground: true
  }
}

interface Props {
  ava?: string
  numberOfNewNotifications?: number
  pageName?: string
  pageID?: string
}

export const PageItem = (props: Props) => {
  // const { ava, numberOfNewNotifications, pageName, pageID } = props
  return (
    <a className='page-item' href='https://google.com'>
      <div className='ava-container'>
        <img src={fptLogo} />
      </div>
      <div className='page-info'>
        <div className='page-name'>FPT Software</div>
        <div className='notification-alert'>
          <FaCircle className='fa-circle' />
          <div className='notification-text'>3 new</div>
        </div>
      </div>
    </a>
  )
}

export const DropDownMenu = (): JSX.Element => {
  const classes = useStyles()
  return (
    <Accordion className={classes['drop-down-menu']}>
      <AccordionSummary
        className='accordion-summary'
        expandIcon={<ExpandMoreIcon className='expand-icon' />}
      >
        <Typography className='typography'>
          <div className='summary-icon-container'>
            <BiFlag className='summary-icon' />
          </div>
          <div className='summary-text'>Your x Pages</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className='accordion-details'>
        <Typography className='typography'>
          <div className='page-items'>
            <PageItem />
            <PageItem />
            <PageItem />
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
