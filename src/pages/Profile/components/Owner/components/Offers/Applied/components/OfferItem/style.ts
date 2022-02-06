import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'offer-item': {
    borderBottom: '1.5px solid #E4E6E6',
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: 'white',
    marginBottom: '0.5rem',
    transition: 'border 0.5s ease-out',
    '&:hover': {
      cursor: 'pointer'
    },
    '& .ava-container': {
      height: '100%',
      width: '25%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: '6rem',
        height: '6rem'
      }
    },
    '& .main': {
      height: '100%',
      width: '75%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& .offer-title': {
        color: '#13AA52',
        width: '100%',
        paddingLeft: '0.5rem',
        fontWeight: 600
      },
      '& .hovering': {
        textDecoration: 'underline'
      },
      '& .being-clicked': {
        textDecoration: 'underline',
        color: '#116149'
      },
      '& .offer-info': {
        color: '#8A8A8A',
        width: '100%',
        paddingLeft: '0.5rem',
        marginTop: '0.1rem',
        fontSize: '0.6rem'
      },
      '& .workplace': {
        color: '#00000099',
        width: '100%',
        paddingLeft: '0.5rem',
        fontSize: '0.75rem',
        marginTop: '0.25rem'
      },
      '& .location': {
        color: '#00000099',
        width: '100%',
        paddingLeft: '0.5rem',
        fontSize: '0.75rem',
        marginTop: '0.25rem'
      },
      '& .admission-status': {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.5rem',
        margin: '0.25rem 0',
        fontSize: '0.725rem',
        fontWeight: 600,
      },
      '& .awaiting': {
        color: '#8A8A8A',
      },
      '& .accepted': {
        color: '#13AA52'
      },
      '& .rejected': {
        color: '#D22D33'
      },
      '& .bottom-info': {
        color: '#00000099',
        width: '100%',
        paddingLeft: '0.5rem',
        fontSize: '0.65rem',
        marginTop: 'auto',
        marginBottom: '0.5rem',
        '& span': {
          color: '#13AA52',
          fontWeight: 600
        },
      }
    }
  }
})
