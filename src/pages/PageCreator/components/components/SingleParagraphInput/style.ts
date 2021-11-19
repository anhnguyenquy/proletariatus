import { makeStyles } from '@mui/styles'

export const singleTextInputStyle = {
  'single-paragraph-input': {
    margin: '0.75rem 0',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'flex-start',
    // height: '10rem',
    '& .label': {
      color: '#8A8A8A',
      fontWeight: 500,
      fontSize: '0.8rem',
      // marginBottom: '0.8rem'
    },
    '& .input-container': {
      width: '100%',
      '& .input': {
        border: '1px solid #5F5F5F',
        borderRadius: '5px',
        width: '100%',
        height: 'auto',
        boxSizing: 'border-box',
        fontFamily: 'Montserrat',
        padding: '0.5rem',
        fontSize: '0.7rem',
        resize: 'none',
        minHeight: '7rem',
        overflowY: 'scroll',
        overflowX: 'hidden',
        '&:focus': {
          border: '1px solid #5F5F5F !important',
          outline: 'none !important',
        },
      }
    },
    '& .description': {
      marginTop: '0.4rem',
      fontSize: '0.65rem',
    }
  }
}

export const useStyles = makeStyles(singleTextInputStyle)