import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  description: {
    margin: '0 0 0.75rem 0',
    '& .label': {
      marginBottom: '0.5rem',
      fontSize: '0.8rem',
      color: '#8A8A8A'
    },
    '& .dezcription': {
      fontSize: '0.7rem',
      color: '#8A8A8A',
      marginTop: '0.5rem'
    }
  }
})