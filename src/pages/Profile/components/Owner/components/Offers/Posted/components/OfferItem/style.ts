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
    '& .edit-button': {
      width: '2.25rem',
      height: '2.25rem',
      position: 'absolute',
      right: '0.25rem',
      top: '-0.5rem',
      '& .edit-button-icon': {
        color: '#6B6C6E',
      }
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
      '& .recruitment-status': {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.5rem',
        margin: '0.25rem 0',
        '& .recruiting-icon': {
          width: '1rem',
          height: '1rem',
          color: '#057642',
          marginRight: '0.25rem'
        },
        '& .actively-recruiting-text': {
          fontSize: '0.725rem',
          color: '#13AA52'
        },
        '& .closed-text': {
          fontSize: '0.725rem',
          color: '#6B6C6E',
          fontWeight: 600
        }
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
