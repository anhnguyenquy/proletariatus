import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'check-list': {
    margin: '0.75rem 0',
    '& .title': {
      color: '#8A8A8A !important',
      fontWeight: 500,
      fontSize: '0.8rem'
    },
    '& .options': {
      width: '100% !important',
      outline: 0,
      display: 'flex',
      flexDirection: 'column',
      marginTop: '0.4rem',
      '& .option': {
        margin: 0,
        marginLeft: '-0.3rem',
        '& .MuiRadio-root': {
          width: '1.5rem',
          height: '1.5rem',
          marginRight: '0.25rem',
          '& span': {
            '& .MuiSvgIcon-root': {
              width: '1.125rem',
              height: '1.125rem'
            }
          }
        },
        '& .MuiTypography-root': {
          fontSize: '0.8rem'
        }
      }
    }
  }
})