import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'nested-array-input': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .label': {
      color: '#8A8A8A',
      fontSize: '0.8rem',
      fontWeight: 500,
      marginBottom: '0.4rem',
      width: '100%',
    },
    '& .icon-button': {
      width: '3rem',
      height: '3rem',
      '& .fa-plus-circle': {
        color: 'white',
        backgroundColor: '#13AA52',
        borderRadius: '50%',
        border: '2px solid #13AA52',
        margin: 0
      }
    },
    '& .description': {
      color: '#8A8A8A',
      fontSize: '0.75rem',
      width: '100%',
      fontWeight: 500,
      marginTop: '0.5rem',
      marginBottom: '1rem'
    }
  }
})