import { makeStyles } from '@mui/styles'

export const singleSelectInputStyle = {
  'single-select-input': {
    margin: '0.75rem 0',
    '& .label': {
      color: '#8A8A8A',
      fontWeight: 500,
      fontSize: '0.8rem',
    },
    '& .select-container': {
      width: '100%',
      // height: '1.8rem',
      display: 'flex',
      alignItems: 'center',
      // marginTop: '0.75rem',
      '& .value-prefix': {
        fontSize: '0.8rem',
        marginRight: '0.25rem'
      },
      '& #select': {
        // width: '13rem',
        // fontSize: '0.8rem',
      }
    },
    '& .description': {
      marginTop: '0.5rem',
      fontSize: '0.65rem'
    }
  },
  menu: {
    maxHeight: '20rem',
    width: '15rem',
  }
}

export const useStyles = makeStyles(singleSelectInputStyle)