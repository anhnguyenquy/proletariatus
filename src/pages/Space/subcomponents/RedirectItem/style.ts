import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'redirect-item': {
    border: '1px solid transparent !important',
    width: '13rem',
    display: 'flex',
    justifyContent: 'flex-start !important',
    alignItems: 'center',
    height: '2.75rem',
    padding: '0 !important',
    margin: '0.1rem !important',
    '& .image-container': {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '1rem',
      border: '1.5px solid #E4E6E6',
      borderRadius: '5px',
      '& img': {
        width: '1.75rem',
        height: '1.75rem',
      },
    },
    '& .icon-object-container': {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '1rem',
    },
    '& .button-text': {
      flexGrow: 1,
      height: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontWeight: '400',
      textTransform: 'none',
      '& .space-title': {
        fontSize: '0.7rem',
        height: '0.7rem',
        color: 'black',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        marginBottom: '0.25rem'
      },
      '& .space-address': {
        color: '#8A8A8A',
        fontSize: '0.6rem',
        height: '0.6rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.1rem',
        '& .interpunct': {
          fontWeight: 700,
          fontSize: '0.7rem',
          color: 'black'
        }
      },
    },
  },
})
