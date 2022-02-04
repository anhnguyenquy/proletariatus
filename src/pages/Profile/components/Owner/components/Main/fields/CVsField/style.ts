export const style = {
  '& .buttons': {
    // border: '1px solid grey',
    display: 'flex',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    alignItems: 'center',
    // minHeight: '2.5rem',
    position: 'relative',
    flexWrap: 'wrap',
    '& .added-cv': {
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
      '& .button-text': {
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: 600,
        marginLeft: '0.3rem',
        marginRight: '0.4rem',
        border: 'none',
        outline: 'none',
      },
      '& .added-cv-icon': {
        color: 'white',
        marginLeft: 'auto',
        marginRight: '0.3rem',
      }
    },
    '& .add-cv-button': {
      border: '2px solid #057642',
      borderRadius: '20px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      height: '1.75rem',
      minWidth: '6.1rem',
      maxWidth: '15rem',
      cursor: 'pointer',
      marginTop: '0.375rem',
      marginBottom: '0.375rem',
      '& .button-text': {
        color: '#057642',
        fontSize: '0.8rem',
        fontWeight: 600,
        width: '3.5rem',
        marginLeft: '0.2rem',
        border: 'none',
        outline: 'none',
      },
      '& .cv-input': {
        border: 'none',
        outline: 'none',
        fontSize: '0.8rem',
        marginLeft: '0.2rem',
        padding: 0,
        paddingLeft: '0.05rem',
        '&::placeholder': {
          fontWeight: 600,
        },
      },
      '& .button-icon': {
        color: '#057642',
        marginLeft: 'auto',
        marginRight: '0.3rem',
        minWidth: '0.8rem',
        minHeight: '0.8rem',
        width: '0.8rem',
        height: '0.8rem',
      },
      '& .delete': {
        '&:hover': {
          color: '#13AA52',
        },
      },
    },
    '& .popup': {
      position: 'absolute',
      border: '2px solid #E4E6E6',
      borderRadius: '5px',
      fontSize: '0.8rem',
      minHeight: '3rem',
      width: '20rem',
      maxHeight: '10rem',
      overflowY: 'scroll',
      zIndex: '1',
      backgroundColor: 'white',
      '& .menu-item': {
        fontSize: '0.8rem'
      }
    },
  }
}