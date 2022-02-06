import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'info-item': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.85rem',
    margin: '0.5rem 0',
    '& .info-item-icon-container': {
      width: '1rem',
      height: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .info-item-icon': {
        color: '#8A8A8A',
      },
    },
    '& .info-text': {
      color: '#8A8A8A',
      marginLeft: '0.5rem'
    }
  }
})