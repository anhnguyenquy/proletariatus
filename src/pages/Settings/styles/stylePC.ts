import { makeStyles } from "@mui/styles"

export const useStylesPC = makeStyles({
  settings: {
    width: '100%',
    minHeight: '100vh',
    maxWidth: '100vw !important',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F3F2EF',
    '& .main': {
      width: '100%',
      height: '92vh',
      display: 'flex',
      flexDirection: 'column',
      '& .page-title': {
        fontWeight: 500,
        fontSize: '1.1rem',
        marginTop: '3rem',
        marginLeft: '7rem'
      },
      '& .button-container': {
        width: '100%',
        height: '14%',
        minHeight: '5rem',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '7rem',
        '& .general-button': {
          width: '6rem',
          minWidth: '6rem',
          textTransform: 'none',
          borderRadius: '3px',
          boxShadow: 'none',
          marginRight: '1rem',
        },
        '& .privacy-and-activity-button': {
          width: '12rem',
          minWidth: '12rem',
          textTransform: 'none',
          borderRadius: '3px',
          boxShadow: 'none',
          marginRight: '1rem',
        },
        '& .security-button': {
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
  }
})
