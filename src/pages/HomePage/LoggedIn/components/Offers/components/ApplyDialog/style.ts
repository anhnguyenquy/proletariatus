import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'apply-dialog': {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        maxWidth: 'none',
        overflow: 'visible',
        '& .dialog-content': {
          width: '42.5rem',
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
            '& .contact-info': {
              fontSize: '1.2rem',
              fontWeight: 600,
              margin: '1rem auto 1rem 2rem',
            },
            '& .user-general-info': {
              width: '100%',
              paddingLeft: '2rem',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box',
              '& .user-ava': {
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                marginRight: '1rem'
              },
              '& .text-info': {
                '& .user-name': {
                  fontWeight: 600
                },
                '& .--': {
                  color: '#8A8A8A',
                  fontWeight: 500
                },
                '& .user-location': {
                  color: '#8A8A8A',
                  fontWeight: 500,
                  fontSize: '0.8rem'
                }
              }
            },
            '& .phone-number': {
              width: '100%',
              padding: '0 2rem 0 2rem',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box',
              height: '4.5rem',
              marginTop: '0.75rem'
            },
            '& .resume-section': {
              '& .resume-section-title': {
                fontWeight: 600,
                margin: '0 auto 0.5rem 2rem',
              },
              '& .resume-section-instruction': {
                color: '#8A8A8A',
                fontSize: '0.7rem',
                fontWeight: 500,
                margin: '0rem auto 0.5rem 2rem',
              },
              '& .resume-options': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start !important',
                paddingLeft: '2rem',
                '& .-OR-': {
                  color: '#888089',
                  fontSize: '0.85rem',
                  marginRight: '2rem'
                },
                '& .upload-resume-button': {
                  textTransform: 'none',
                  fontSize: '0.8rem',
                  border: '2px solid #13AA52',
                  borderRadius: '25px',
                  height: '2rem',
                  '& .button-text': {
                    margin: '0.5rem'
                  }
                }
              },
              '& .supported-file-types': {
                color: '#8A8A8A',
                fontSize: '0.7rem',
                fontWeight: 500,
                margin: '0.5rem auto 0.5rem 2rem',
              }
            },
            '& .additional-questions-section': {
              padding: '0 2rem',
              marginBottom: '2rem',
              paddingTop: '0.1rem',
              '& .additional-questions-section-title': {
                fontWeight: 600,
                margin: '0.5rem 0 0.5rem 0',
              },
              '& .questions': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '9rem'
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
            '& .submit-application-button': {
              textTransform: 'none',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginLeft: 'auto',
              marginRight: '2rem',
              width: '10rem',
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