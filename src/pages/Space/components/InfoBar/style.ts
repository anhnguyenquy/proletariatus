import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'info-bar': {
    border: '2px solid #E4E6E6',
    borderRadius: '5px',
    height: '10rem',
    marginTop: '5rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignSelf: 'center',
    padding: '0.5rem',
    boxSizing: 'border-box',
    '& .top': {
      width: '100%',
      height: '50%',
      display: 'flex',
      alignItems: 'center',
      '& .ava-container': {
        marginTop: '0.5rem',
        marginLeft: '0.5rem',
        '& .ava': {
          width: '3.5rem',
          height: '3.5rem'
        }
      },
      '& .top-middle': {
        marginLeft: '1rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        '& .space-title': {
          fontWeight: 600
        },
        '& .following-status': {
          backgroundColor: '#F3F2EF',
          border: '1.5px solid #E4E6E6',
          borderRadius: '23px',
          display: 'flex',
          alignItems: 'center',
          height: '1.5rem',
          width: '7.5rem',
          '& .status-icon-container': {
            '& .status-icon': {
              color: '#6B6C6E',
              marginLeft: '0.25rem'
            },
          },
          '& .button-text': {
            color: '#888089',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            marginLeft: '0.25rem'
          },
          '& .number-of-followers': {
            color: '#A1A4A5',
            fontSize: '0.75rem',
            marginLeft: '0.25rem'
          },
          '&:hover': {
            opacity: '0.8'
          }
        }
      },
      '& .settings-button': {
        marginLeft: 'auto',
        alignSelf: 'flex-start',
        width: '2rem',
        height: '2rem',
        marginTop: '0.3rem',
        marginRight: '0.25rem',
        '& .button-icon': {
          width: '1.5rem',
          height: '1.5rem'
        }
      }
    },
    '& .bottom': {
      height: '50%',
      fontSize: '0.8rem',
      margin: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
    }
  }
})