import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'setting-item': {
    width: '35rem',
    display: 'flex',
    alignItems: 'center',
    minHeight: '3rem',
    justifyContent: 'space-between',
    margin: '0.1rem 0 0.1rem 0',
    '& .name-and-description': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .setting-name': {
        fontWeight: 600,
        marginBottom: '0.25rem',
        fontSize: '0.8rem'
      },
      '& .setting-description': {
        fontSize: '0.7rem',
        color: '#6B6C6E',
        maxWidth: '25rem'
      }
    },
    '& .button': {
      textTransform: 'none',
      borderRadius: '25px',
      fontSize: '0.8rem',
      height: '1.75rem',
      width: '6rem',
      '& .button-text': {
        fontWeight: 600
      }
    },
    '& .text': {},
    '& .contained': {},
    '& .outlined': {
      backgroundColor: 'white',
      '&:hover': {
      }
    },
    '& .select': {
      minWidth: '8rem !important',
    },
    '& .switch': {
      marginRight: '1.75rem !important',      
    }
  },
  menu: {
    maxHeight: '20rem',
    width: '15rem',
  }
})