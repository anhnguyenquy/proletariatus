export const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& .content': {
    // width: '42.5rem',
    minWidth: '35rem',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '15px',
    border: '2px solid #E4E6E6',
    minHeight: '10rem',
    paddingBottom: '3rem',
    '& .left': {
      width: '100%',
      '& .title': {
        width: '100%',
        height: '3.5rem',
        borderBottom: '2px solid #E4E6E6',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1.5rem',
        fontWeight: 600,
        fontColor: '#000000e6',
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
      },
    },
  }
}
