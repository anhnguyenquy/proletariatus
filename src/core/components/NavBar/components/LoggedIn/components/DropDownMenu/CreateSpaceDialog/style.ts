import { makeStyles } from '@mui/styles'

export const logoInputStyles =  {
  'file-upload-prompt': {
    margin: '0.75rem 0',
    '& .prompt-title': {
      color: '#000000 !important',
      fontWeight: 600,
      fontSize: '0.8rem',
    },
    '& .upload-container': {
      backgroundColor: '#F3F2EF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '2.75rem',
      borderRadius: '5px',
      marginTop: '0.5rem',
      '& .uploaded-file': {
        height: '5rem !important',
      },
      '& .upload-text': {
        color: 'black',
        fontWeight: 600,
        fontSize: '0.75rem',
        marginLeft: '2rem'
      },
      '& .upload-button': {
        textTransform: 'none',
        backgroundColor: 'white',
        fontSize: '0.7rem',
        borderRadius: '20px',
        border: '2px solid #13AA52',
        height: '1.5rem',
        marginRight: '3rem',
        '& .button-text': {
          fontWeight: 600,
          margin: '0 0.5rem'
        }
      }
    },
    '& .uploaded': {
      justifyContent: 'center',
      padding: '1rem'
    },
    '& .description': {
      marginTop: '0.5rem',
      fontSize: '0.65rem'
    }
  }
}

export const useStyles = makeStyles({
  'create-space-dialog': {
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
            padding: '1rem 2rem 1rem 2rem',
            '& .text-input-section': {
              '& .section-name': {
                color: '#000000',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '0.2rem',

              },
              '& .section-description': {
                color: '#8A8A8A',
                fontSize: '0.7rem',
                fontWeight: 500,
                marginBottom: '0.4rem'
              },
              '& .short-name-input': {
                border: '1px solid #6B6C6E',
                color: '#6B6C6E',
                borderRadius: '5px',
                width: '100%',
                minWidth: '13rem',
                boxSizing: 'border-box',
                outline: 'none',
                height: '100%',
                minHeight: '2.213rem !important',
                fontSize: '0.8rem',
                padding: '0 0.5rem',
                letterSpacing: '0.025rem'
              },
              '& .characters-remaining': {
                marginTop: '0.5rem',
                fontSize: '0.65rem',
                color: '#8A8A8A'
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
            '& .create-space-button': {
              textTransform: 'none',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginLeft: 'auto',
              marginRight: '2rem',
              width: '7.5rem',
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