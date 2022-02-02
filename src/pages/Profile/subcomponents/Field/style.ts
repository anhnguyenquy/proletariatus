import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  field: {
    backgroundColor: 'white',
    border: '2px solid #E4E6E6',
    borderRadius: '5px',
    width: '42.5rem',
    minHeight: '3rem',
    padding: '1.5rem 1.25rem 0 1.25rem',
    marginBottom: '1.5rem',
    color: '#8A8A8A',
    boxSizing: 'border-box',
    '& .title': {
      color: '#13AA52 !important',
      fontWeight: 600,
      marginBottom: '0.5rem'
    }
  }
})
