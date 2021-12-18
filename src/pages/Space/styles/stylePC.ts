import { makeStyles } from '@mui/styles'

export const useStylesPC = makeStyles({
  space: {
    width: '100%',
    minHeight: '100vh',
    maxWidth: '100vw !important',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F3F2EF',
    '& .page-content': {
      width: '100%',
      minHeight: 'calc(100vh - 3rem)',
      paddingLeft: '27.5%',
      display: 'flex',
      '& .middle-content': {
        // border: '1px solid black',
        width: '45%',
        minWidth: '36.1rem',
        overflowX: 'visible',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& .buttons-container': {
          width: '100%',
          height: '14%',
          minHeight: '3rem',
          display: 'flex',
          alignItems: 'center',
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
            mindWidth: '6rem',
            textTransform: 'none',
            borderRadius: '3px',
            boxShadow: 'none',
          },
          '& .active': {
            backgroundColor: 'white !important',
            color: 'black !important',
          },
          '& .create-offer-button': {
            textTransform: 'none',
            border: '2px solid #13AA52',
            backgroundColor: 'white',
            width: '9rem',
            marginLeft: 'auto',
            fontSize: '0.875rem !important',
            '&:hover': {
              border: '2px solid #13AA52',
            },
            '& .create-offer-button-icon': {
              backgroundColor: '#13AA52',
              color: 'white',
              borderRadius: '3px',
              padding: '0.2rem',
              width: '10px',
              height: '10px',
              fontWeight: 900
            },
            '& .button-text': {
              color: 'black',
              fontWeight: 500
            }
          }
        }
      },
      '& .right-content': {
        width: '27.5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 3rem)',
        '& .related-spaces': {
          backgroundColor: 'white',
          borderRadius: '5px',
          border: '2px solid #E4E6E6',
          minHeight: '10rem',
          width: '15rem',
          '& .box-title': {
            fontWeight: 600,
            width: '100%',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '1rem'
          },
          '& .space-items': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem'
          }
        }
      }
    }
  }
}) 