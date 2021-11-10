import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'offer-item': {
    border: '1.5px solid #E4E6E6',
    borderRadius: '5px',
    width: '11rem',
    height: '13rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: 'white',
    margin: '0.75rem',
    '&:hover': {
      border: '1.5px solid #a5a5a5',
      // outline: '2px solid transparent'
      // padding: '1px ',
    },
    '& .cover-image': {
      width: '100%',
      height: '30%',
      borderRadius: '5px',
    },
    '& .ava': {
      border: '2px solid #E4E6E6',
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      padding: '0.5rem',
      boxSizing: 'border-box',
      zIndex: 1,
      position: 'absolute',
      top: '1.75rem',
      backgroundColor: 'white',
    },
    '& .offer-title': {
      color: '#13AA52',
      fontWeight: '600',
      fontSize: '0.8rem',
      marginTop: '2.25rem',
      marginBottom: '0.25rem',
    },
    '& .organization-name': {
      color: '#8A8A8A',
      fontSize: '0.75rem',
      marginBottom: '0.25rem',
    },
    '& .location': {
      color: '#8A8A8A',
      fontSize: '0.75rem',
    },
    '& .apply-button': {
      textTransform: 'none',
      border: '2px solid #13AA52',
      width: '5rem',
      height: '1.5rem',
      marginTop: '0.8rem',
      fontSize: '0.8rem',
      '&:hover': {
        border: '2px solid #13AA52',
      },
    },
  },
})
