import { makeStyles } from '@mui/styles'

export const styles = {
  'file-upload-prompt': {
    margin: '0.75rem 0',
    '& .prompt-title': {
      color: '#8A8A8A !important',
      fontWeight: 500,
      fontSize: '0.8rem',
    },
    '& .upload-container': {
      backgroundColor: '#F3F2EF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '2.75rem',
      borderRadius: '5px',
      marginTop: '0.5rem',
      '& .uploaded-file': {
        height: '5rem !important',
      },
      '& .upload-text': {
        color: 'black',
        fontWeight: 600,
        fontSize: '0.75rem',
        marginLeft: '2rem'
      },
      '& .upload-button': {
        textTransform: 'none',
        backgroundColor: 'white',
        fontSize: '0.7rem',
        borderRadius: '20px',
        border: '2px solid #13AA52',
        height: '1.5rem',
        marginRight: '3rem',
        '& .button-text': {
          fontWeight: 600,
          margin: '0 0.5rem'
        }
      }
    },
    '& .uploaded': {
      justifyContent: 'center',
      padding: '1rem'
    },
    '& .description': {
      marginTop: '0.5rem',
      fontSize: '0.65rem'
    }
  }
}

export const useStyles = makeStyles(styles)