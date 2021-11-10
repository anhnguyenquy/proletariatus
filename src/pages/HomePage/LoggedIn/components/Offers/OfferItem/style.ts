import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'offer-item': {
    border: '1.5px solid #E4E6E6',
    borderRadius: '5px',
    width: '100%',
    height: '13rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: 'white',
    margin: '0.75rem',
    '&:hover': {
      border: '1.5px solid #a5a5a5',
      // outline: '2px solid transparent'
      // padding: '1px ',
    },
   
  },
})
