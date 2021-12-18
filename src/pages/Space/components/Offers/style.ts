import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  offers: {
    // width: '100%',
    alignSelf: 'center',  

    '& .content': {
      marginBottom: '10rem',
      minWidth: '36rem',
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
        paddingTop: '1.5rem',
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
      width: '90vw',
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