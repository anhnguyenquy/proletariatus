import { makeStyles } from '@mui/styles'

export const singleTextInputStyle = {
  'single-text-input': {
    margin: '0.75rem 0',
    '& .label': {
      color: '#8A8A8A',
      fontWeight: 500,
      fontSize: '0.8rem',
      marginBottom: '0.5rem',
    },
    '& .input-container': {
      width: '100%',
      height: '2.213rem',
      display: 'flex',
      alignItems: 'center',
      '& .value-prefix': {
        fontSize: '0.8rem',
        marginRight: '0.25rem'
      },
      '& input': {
        border: '1px solid #5F5F5F',
        borderRadius: '5px',
        width: '100%',
        minWidth: '13rem',
        boxSizing: 'border-box',
        outline: 'none',
        height: '100%',
        minHeight: '2.213rem !important',
        fontSize: '0.8rem',
        padding: '0 0.5rem',
        letterSpacing: '0.025rem'
      }
    },
    '& .description': {
      marginTop: '0.5rem',
      fontSize: '0.65rem'
    }
  }
}

export const useStyles = makeStyles(singleTextInputStyle)