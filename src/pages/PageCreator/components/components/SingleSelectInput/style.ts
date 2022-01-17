import { makeStyles } from '@mui/styles'

export const singleSelectInputStyle = {
  'single-select-input': {
    margin: '0.75rem 0',
    '& .label': {
      color: '#8A8A8A',
      fontWeight: 500,
      fontSize: '0.8rem',
      marginBottom: '0.5rem'
    },
    '& .select-container': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      '& .value-prefix': {
        fontSize: '0.8rem',
        marginRight: '0.25rem'
      },
      '& .MuiOutlinedInput-root': {
        margin: '0 !important'
      }
    },
    '& .description': {
      marginTop: '0.5rem',
      fontSize: '0.65rem'
    }
  },
  menu: {
    maxHeight: '13rem',
    width: '15rem',
  }
}

export const useStyles = makeStyles(singleSelectInputStyle)