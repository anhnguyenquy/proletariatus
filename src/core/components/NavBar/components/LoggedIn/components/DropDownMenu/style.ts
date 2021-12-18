import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'nav-bar-popover': {
    // overflow: 'hidden !important',
    boxSizing: 'border-box',
    width: '18rem',
    boxShadow: 'none !important',
    borderBottom: '1px solid grey',
    borderLeft: '1px solid grey',
    borderRight: '1px solid grey',
    maxHeight: '30rem !important',
    '&::-webkit-scrollbar': {
      backgroundColor: '#F1F1F1',
      width: '0.75rem',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '8px',
      backgroundColor: '#C1C1C1',
      minHeight: '24px',
      border: '3px solid #F1F1F1',
      '&:hover': {
        backgroundColor: '#a8a8a8',
      },
      '&:active': {
        backgroundColor: '#787878',
      },
    },
    '& .popover-content': {
      width: '17.25rem !important',
      boxSizing: 'border-box',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& .filter-input': {
        fontFamily: 'Montserrat, sans-serif',
        border: '1.5px solid #e1e1e1',
        padding: '0.5rem',
        borderRadius: '5px',
        height: '1rem',
        width: '13.5rem',
        margin: '0.3rem',
        fontSize: '0.85rem',
        paddingLeft: '1rem',

        '&::placeholder': {
          color: '#888089',
          fontWeight: 'normal',
          fontStyle: 'normal',
          letterSpacing: '0.015rem',
        },
      },
      '& .my-spaces-section': {
        width: '15rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Montserrat, sans-serif',
        marginTop: '0.75rem',
        '& .section-title': {
          color: '#888089',
          fontSize: '0.85rem',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '0.5rem',
        },
        '& .space-items': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        },
      },
      '& .following-section': {
        width: '15rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Montserrat, sans-serif',
        marginTop: '0.75rem',
        '& .section-title': {
          color: '#888089',
          fontSize: '0.85rem',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '0.5rem',
        },
        '& .following-items': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        },
      },
      '& .other-section': {
        width: '15rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Montserrat, sans-serif',
        marginTop: '0.75rem',
        '& .section-title': {
          color: '#888089',
          fontSize: '0.85rem',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '0.5rem',
        },
        '& .other-items': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          '& .create-post-icon': {
            color: '#13AA52',
            backgroundColor: 'white',
            border: '1px solid #13AA52',
            padding: '0.1rem',
            fontSize: '0.7rem',
            borderRadius: '3px',
          },
          '& .create-offer-icon': {
            color: 'white',
            backgroundColor: '#13AA52',
            border: '1px solid #13AA52',
            padding: '0.1rem',
            fontSize: '0.7rem',
            borderRadius: '3px',
          },
          '& .fa-user-circle': {
            color: '#6B6C6E',
            fontSize: '0.9rem',
            // border: '1px solid orange',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // textStroke: '1px #6B6C6E'
          },
        },
      },
    },
  },
  'drop-down-menu': {
    '& .popover-button': {
      width: '18rem',
      minWidth: '18rem',
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: '#888089',
      borderColor: '#888089',
      '& .start-icon': {
        marginLeft: '0.5rem',
      },
      '& .button-text': {
        marginRight: '10rem',
      },
      '& .end-icon': {
        // marginLeft: '8rem'
      },
      '&:hover': {
        borderColor: '#888089',
      },
    },
  },
})
