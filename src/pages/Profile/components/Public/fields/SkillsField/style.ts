export const style = {
  '& .skills': {
    // border: '1px solid grey',
    display: 'flex',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    alignItems: 'center',
    // minHeight: '2.5rem',
    position: 'relative',
    flexWrap: 'wrap',
    '& .added-skill': {
      display: 'flex',
      alignItems: 'center',
      height: '1.75rem',
      borderRadius: '20px',
      backgroundColor: '#057642',
      border: 'none',
      cursor: 'pointer',
      marginRight: '0.5rem',
      marginTop: '0.375rem',
      marginBottom: '0.375rem',
      '& .added-skill-text': {
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: 600,
        marginLeft: '1rem',
        marginRight: '1rem',
        border: 'none',
        outline: 'none',
      },
      '& .added-skill-icon': {
        color: 'white',
        marginLeft: 'auto',
        marginRight: '0.3rem',
      }
    }
  }
}