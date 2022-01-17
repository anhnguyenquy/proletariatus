import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  posts: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '58rem',
    marginBottom: '3rem',
    // border: '1px solid grey',
    '& .create-post-bar': {
      border: '1.5px solid #E4E6E6',
      borderRadius: '5px',
      width: '40rem',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      margin: '0.25rem',
      // paddingLeft: '0.5rem',
      '&:hover': {
        border: '1.5px solid #A5A5A5',
      },
      '& .ava-container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '7%',
        '& i': {
          color: '#FFFFFF',
          fontSize: '1.6rem',
          textStroke: '1px #6B6C6E',
        }
      },
      '& .input-container': {
        height: '100%',
        width: '93%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& input': {
          width: '95%',
          // marginLeft: '1%',
          height: '1.75rem',
          color: '#888089',
          borderRadius: '5px',
          border: '1px solid #E4E6E6',
          backgroundColor: '#F6F7F8',
          paddingLeft: '0.5rem',
          fontSize: '0.8rem',
          outline: 'none',
          fontWeight: '300',
          '&:hover': {
            border: '1px solid #888089'
          },
          '&:focus': {
            border: '1px solid #888089'
          }
        }
      }
    }
  }
})