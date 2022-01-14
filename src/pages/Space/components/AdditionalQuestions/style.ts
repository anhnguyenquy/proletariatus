import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'additional-questions': {
    '& .label': {
      fontSize: '0.8rem',
      marginTop: '0.75rem',
      marginBottom: '0.4rem',
      color: '#8A8A8A',
    },
    '& .sub-label': {
      fontSize: '0.7rem',
      color: '#8A8A8A',
      marginBottom: '0.25rem'
    },
    '& .questions' : {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '0.5rem',
      '& .question': {
        border: '1px solid #8A8A8A',
        borderRadius: '5px',
        width: '100%',
        boxSizing: 'border-box',
        outline: 'none',
        height: '100%',
        minHeight: '2rem !important',
        fontSize: '0.8rem',
        padding: '0 0.5rem',
        letterSpacing: '0.025rem',
        color: '#8A8A8A',
        margin: '0.25rem 0'
      }
    },
    '& .add-question-button': {
      textTransform: 'none',
      fontSize: '0.8rem',
      borderRadius: '20px',
      color: '#057642',
      border: '2px solid #057642',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      height: '2rem',
      '&:hover': {
        border: '2px solid #057642',
      },
      '& .end-icon': {
        fontSize: '0.8rem'
      }
    }
  }
})