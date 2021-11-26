import { makeStyles } from '@mui/styles'

export const useStylesPC = makeStyles({
  'home-page': {
    width: '100%',
    minHeight: '100vh',
    maxWidth: '100vw !important',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F3F2EF',
    '& .main': {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .button-container': {
        width: '100%',
        height: '14%',
        minHeight: '5rem',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '26rem',
        '& .offers-button': {
          width: '6rem',
          mindWidth: '6rem',
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
        }
      }
    }
  }
})
