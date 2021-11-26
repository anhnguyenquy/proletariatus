import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  offers: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3rem',
    boxSizing: 'border-box',
    width: '100%',
    alignItems: 'center',
    minHeight: '27rem',
    '& .filters': {
      width: '67.1%',
      minWidth: '53.25rem',
      display: 'flex',
      flexDirection: 'column',
      height: '7.5rem',
      '& .line-one': {
        width: '100%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        '& .filter': {
          margin: '0 0.5rem',
          fontSize: '0.9rem !important',
        },
        '& #country': {
          width: '20rem',
        },
        '& #province': {
          width: '10rem',
        },
        '& #skill': {
          width: '11.5rem'
        },
      },
      '& .line-two': {
        width: '100%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        '& .filter': {
          margin: '0 0.5rem',
          fontSize: '0.9rem !important',
        },
        '& #department': {
          width: '7rem'
        },
        '& #employment-type': {
          width: '9rem'
        },
        '& #pay-range': {
          width: '5rem'
        },
        '& #keyword': {
          width: '10rem',
          // marginLeft: '0.5rem', 
          fontSize: '0.9rem !important',

        },

        '& .search-button': {
          textTransform: 'none',
          border: '2px solid #13AA52',
          width: '5rem',
          marginLeft: '2.5rem',
          fontSize: '0.9rem !important',
          '&:hover': {
            border: '2px solid #13AA52',
          },
        },
      },
    },
    '& .content': {
      width: '45%',
      minWidth: '35rem',
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '15px',
      border: '2px solid #E4E6E6',
      minHeight: '10rem',
      paddingBottom: '3rem',
      '& .left': {
        width: '100%',
        '& .title': {
          width: '100%',
          height: '3.5rem',
          borderBottom: '2px solid #E4E6E6',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '1.5rem',
          fontWeight: 600,
          fontColor: '#000000e6',
          fontSize: '1.2rem',
          marginBottom: '0.5rem'
        },
      },

    },
    '& #expanded': {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '& .left': {
        width: '35%',
      },
      '& .right': {
        height: '100%',
        width: '65%',
        '& .offer-title': {
          fontWeight: 600,
          fontSize: '1.2rem',
          margin: '1rem 0rem 0rem 1.5rem',
        },
        '& .general-info': {
          fontSize: '0.85rem',
          margin: '0.25rem 0rem 0rem 1.5rem',
          '& .workplace': {},
          '& .work-location': {},
          '& .post-time': {
            color: '#8A8A8A'
          },
          '& .number-of-applicants': {
            color: '#13AA52'
          }
        },
        '& .quasi-general-info': {
          margin: '1rem 0rem 0rem 1.5rem',
        },
        '& .apply-button': {
          textTransform: 'none',
          borderRadius: '30px',
          width: '6.5rem',
          margin: '1rem 0rem 1rem 1.5rem',
          '& .button-text': {
            fontWeight: 600,
            fontSize: '0.85rem'
          },
          '& .apply-button-end-icon': {
            fontSize: '0.85rem'
          }
        },
        '& .apply-button-extended': {
          width: '7.5rem !important'
        },
        '& .main-info': {
          marginLeft: '1.5rem',
          fontSize: '0.8rem',
          '& .sub-offer-item': {
            marginTop: '0.5rem',
            '& .sub-offer-item-label': {
              fontWeight: 500
            },
            '& .sub-offer-item-content': {
              marginRight: '1.5rem',
              marginTop: '0.5rem'
            }
          }
        }
      }
    }
  }
})