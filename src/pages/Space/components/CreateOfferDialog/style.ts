import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'create-offer-dialog': {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        maxWidth: 'none',
        overflow: 'visible',
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
            padding: '1rem 2rem 1rem 2rem'
          },
          '& .dialog-end': {
            borderTop: '3px solid #E4E6E6',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '3rem',
            minHeight: '3rem',
            '& .post-offer-button': {
              textTransform: 'none',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginLeft: 'auto',
              marginRight: '2rem',
              width: '6rem',
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
  }
}) 