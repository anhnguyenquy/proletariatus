import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  owner: {
    width: '100%',
    minHeight: '100%',
    overflowX: 'hidden',
    backgroundColor: '#F3F2EF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '3rem',
    '& .billboard': {
      border: '2px solid #E4E6E6',
      borderRadius: '5px',
      width: '42.5rem',
      height: '22.5rem',
      marginBottom: '1.5rem',
      marginTop: '2rem',
      color: '#8A8A8A',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      '& .background-section': {
        width: '100%',
        height: '42.5%',
        position: 'relative',
        '& .upload-background-button': {
          zIndex: 1,
          position: 'absolute',
          right: '1rem',
          top: '1rem',
          backgroundColor: 'white',
          width: '2rem',
          height: '2rem',
          '& .upload-background-button-icon': {
            width: '1.1rem',
            height: '1.1rem',

          }
        },
        '& .background-image': {
          borderRadius: '5px 5px 0 0',
          height: '100%',
          width: '100%'
        }
      },
      '& .ava': {
        borderRadius: '50%',
        width: '9rem',
        height: '9rem',
        border: '3px solid white',
        zIndex: 1,
        position: 'absolute',
        top: '4.5rem',
        left: '2rem'
      },
      '& .bottom-section': {
        height: '57.5%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        '& .left': {
          width: '28.6875rem',
          boxSizing: 'border-box',
          paddingLeft: '2rem',
          paddingTop: '5.25rem',
          '& .profile-name': {
            color: 'black',
            fontSize: '1rem',
            fontWeight: 700
          },
          '& .title': {
            color: 'black',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginTop: '0.1rem'
          },
          '& .contact': {
            marginTop: '0.2rem',
            '& .location': {
              fontSize: '0.8rem',
              color: '#8A8A8A'
            },
            '& .interpunct': {
              fontSize: '0.8rem',
              color: '#8A8A8A'
            },
            '& .contact-info': {
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#13AA52',
              '&:hover': {
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
                cursor: 'pointer'
              }
            }
          },
          '& .followers-and-following': {
            marginTop: '0.1rem',
            '& .followers': {
              '& .followers-num': {
                fontSize: '0.8rem',
                color: '#6B6C6E',
                fontWeight: 600
              },
              '& .followers-text': {
                fontSize: '0.8rem',
                color: '#8A8A8A'
              },
            },
            '& .interpunct': {
              fontSize: '0.8rem',
              color: '#8A8A8A'
            },
            '& .following': {
              '& .following-num': {
                fontSize: '0.8rem',
                color: '#6B6C6E',
                fontWeight: 600
              },
              '& .following-text': {
                fontSize: '0.8rem',
                color: '#8A8A8A'
              },
            }
          },
          '& .connections': {
            marginTop: '0.2rem',
            fontSize: '0.8rem',
            color: '#13AA52',
            fontWeight: 600
          }
        },
        '& .right': {
          height: '100%',
          width: '13.8125rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          justifyContent: 'center',
          '& .edit-intro-button': {
            width: '2.5rem',
            height: '2.5rem',
            position: 'absolute',
            right: '1rem',
            top: '0.5rem',
            '& .edit-intro-button-icon': {
              color: '#6B6C6E',
              width: '1.5rem',
              height: '1.5rem',
            }
          },
          '& .item': {
            display: 'flex',
            alignItems: 'center',
            '& .item-logo': {
              width: '1.75rem',
              height: '1.75rem',
              marginRight: '0.5rem'
            },
            '& .item-name': {
              color: 'black',
              fontSize: '0.8rem',
              fontWeight: 600
            },
          },
          '& .first': {
            marginBottom: '0.5rem'
          }
        }
      }
    },
    '& .button-container': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '22.5rem',
      marginBottom: '1.5rem',
      '& .main-button': {
        width: '6rem',
        minWidth: '6rem',
        textTransform: 'none',
        borderRadius: '3px',
        boxShadow: 'none',
        marginRight: '1rem',
      },
      '& .offers-button': {
        width: '6rem',
        minWidth: '6rem',
        textTransform: 'none',
        borderRadius: '3px',
        boxShadow: 'none',
        marginRight: '1rem',
      },
      '& .posts-button': {
        width: '6rem',
        minWidth: '6rem',
        textTransform: 'none',
        borderRadius: '3px',
        boxShadow: 'none',
      },
      '& .active': {
        backgroundColor: 'white !important',
        color: 'black !important',
      }
    }
  }
})