import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'nav-bar': {
    width: '100%',
    height: '8%',
    minHeight: '3rem',
    maxHeight: '3rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    filter: 'drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.25))',
    '& .google-icon': {
      width: '2rem',
      height: '2rem',
      minWidth: '2rem',
      minHeight: '2rem',
      marginLeft: '8rem',
      marginRight: '2rem',
    },
    //not logged in -------------------------------------------------------
    '& .login-button': {
      textTransform: 'none',
      border: '2px solid #13AA52',
      width: '6rem',
      minWidth: '6rem',
      marginLeft: '40rem',
      marginRight: '1.5rem',
      '&:hover': {
        borderWidth: '2px',
      },
    },
    '& .sign-up-button': {
      textTransform: 'none',
      backgroundColor: '#16C172',
      width: '6rem',
      minWidth: '6rem',
      boxShadow: 'none',
      // border: "2px solid #16C172",
      '&:hover': {
        // border: "2px solid #16C172",
        // backgroundColor: "white",
        // color: "#13AA52",
        boxShadow: 'none',
      },
    },
  },
})
