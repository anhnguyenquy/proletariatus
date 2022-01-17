import { makeStyles } from '@mui/styles'

export const useStylesPC = makeStyles({
  'page-creator': {
    width: '100%',
    minHeight: '100%',
    overflowX: 'hidden',
    backgroundColor: '#F3F2EF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '3rem',
    '& .top-section': {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '20%',
      minHeight: '7.5rem',
      marginTop: '2px',
      marginBottom: '3rem',
      filter: 'drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.25))',
      '& .button-container': {
        width: '100%',
        height: '35%',
        // border: '1px solid red',
        display: 'flex',
        alignItems: 'flex-end',
        paddingLeft: '3rem',
        '& .back-button': {
          textTransform: 'none',
          '& .arrow-back': {
            width: '1.5rem',
            height: '1.25rem',
          },
        }
      },
      '& .decoration': {
        width: '100%',
        height: '65%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '3rem',
        paddingBottom: '0.5rem',
        '& .building-icon': {
          width: '3.5rem',
          height: '3.5rem',
          marginRight: '1rem'
        },
        '& .text': {
          color: '#8A8A8A'
        }
      }
    },
    '& .acknowledgement': {
      width: '42.5rem',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      '& .check-box': {

      },
      '& .text': {
        fontSize: '0.8rem',
        '& span': {
          color: '#13AA52',
          fontWeight: 600
        }
      }
    },
    '& .create-page-button-container': {
      width: '42.5rem',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      '& .create-page-button': {
        textTransform: 'none',
        backgroundColor: 'white',
        fontSize: '0.7rem',
        fontWeight: 600,
        borderRadius: '20px',
        border: '2px solid #13AA52',
        height: '1.5rem',
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: '2rem'
      }
    }
  }
})
