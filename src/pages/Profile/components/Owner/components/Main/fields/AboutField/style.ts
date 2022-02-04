export const style = {
  position: 'relative',
  paddingBottom: '2rem',
  '& .edit-about-button': {
    width: '2.25rem',
    height: '2.25rem',
    position: 'absolute',
    right: '0.75rem',
    top: '0.75rem',
    '& .edit-about-button-icon': {
      color: '#6B6C6E',
      // width: '1.75rem',
      // height: '1.75rem',
    }
  },
  '& .text': {
    fontSize: '0.8rem',
    color: '#6B6C6E',
    marginTop: '1rem'
  },
  '& .more-button': {
    fontSize: '0.8rem',
    position: 'absolute',
    right: '1rem',
    '&:hover': {
      cursor: 'pointer',
      color: '#13AA52'

    }
  }
}