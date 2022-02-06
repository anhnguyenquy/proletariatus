export const style = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .switch-button-container': {
    display: 'flex',
    alignItems: 'center',
    marginRight: '28.5rem',
    marginBottom: '1.5rem',
    '& .applied-button': {
      width: '6rem',
      minWidth: '6rem',
      textTransform: 'none',
      borderRadius: '3px',
      boxShadow: 'none',
      marginRight: '1rem',
    },
    '& .posted-button': {
      width: '6rem',
      minWidth: '6rem',
      textTransform: 'none',
      borderRadius: '3px',
      boxShadow: 'none',
      marginRight: '1rem',
    },
    '& .active': {
      backgroundColor: 'white !important',
      color: 'black !important',
    }
  }
}