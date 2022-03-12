import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'create-post-dialog': {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        maxWidth: 'none',
        overflowX: 'visible',
        '& .dialog-content': {
          width: '45rem',
          height: '33rem',
          minHeight: '33rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          backgroundColor: 'white',
          borderRadius: '5px',
          '& .dialog-title': {
            fontWeight: 600,
            borderBottom: '3px solid #E4E6E6',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3rem'
          },
          '& .actual-content': {
            width: '100%',
            height: 'calc(100% - 3rem - 3px)',
            maxHeight: 'calc(100% - 3rem - 3px)',
            overflowY: 'scroll',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            padding: '1rem 2rem 1rem 2rem',
            '& .space-select': {
              width: '13rem',
              fontFamily: 'Montserrat',
              marginTop: '0.75rem'
            },
            '& .content': {
              margin: '0 0 0.75rem 0',
              '& .label': {
                marginBottom: '0.5rem',
                fontSize: '0.8rem',
                color: '#8A8A8A'
              },
              '& .chars-remaining': {
                fontSize: '0.7rem',
                color: '#8A8A8A',
                marginTop: '0.5rem'
              }
            }
          },
          '& .dialog-end': {
            borderTop: '3px solid #E4E6E6',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '3rem',
            minHeight: '3rem',
            '& .post-button': {
              textTransform: 'none',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginLeft: 'auto',
              marginRight: '2rem',
              width: '4.5rem',
              height: '2rem',
              '& .button-text': {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600
              }
            }
          }
        }
      }
    }
  },
  'space-select-placeholder': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& .placeholder-icon': {},
    '& .placeholder-text': {
      marginLeft: '0.5rem'
    }
  }
})