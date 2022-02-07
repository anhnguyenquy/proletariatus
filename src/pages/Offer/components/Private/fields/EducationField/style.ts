export const style = {
  position: 'relative',
  paddingBottom: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  '& .items': {
    marginTop: '1rem',
    '& .item': {
      display: 'flex',
      position: 'relative',
      minHeight: '3.5rem',
      '& .icon': {
        width: '2.75rem',
        height: '2.75rem'
      },
      '& .infos': {
        marginLeft: '0.5rem',
        // marginRight: '1.75rem',
        '& .school': {
          color: '#000000',
          fontWeight: 600,
          fontSize: '0.9rem'
        },
        '& .degree-and-field-of-study': {
          fontSize: '0.8rem',
          color: 'rgba(0,0,0,0.9)',
          marginTop: '0.2rem',
          '& .degree': {},
          '& .coma': {},
          '& .field-of-study': {}
        },
        '& .date': {
          fontSize: '0.8rem',
          color: '#8A8A8A',
          marginTop: '0.1rem',
          '& .start-date': {},
          '& .hyphen': {},
          '& .end-date': {}
        },
        '& .grade': {
          fontSize: '0.8rem',
          color: 'rgba(0,0,0,0.9)',
          marginTop: '0.5rem',
        },
        '& .activities-and-societies': {
          fontSize: '0.8rem',
          color: 'rgba(0,0,0,0.9)',
          marginTop: '0.2rem',
        },
        '& .description': {
          fontSize: '0.8rem',
          color: 'rgba(0,0,0,0.9)',
          marginTop: '0.2rem',
        }
      },
    },
    '& .separator': {
      margin: '0.5rem 0',
      width: 'calc(100% - 3.25rem)',
      marginLeft: '3.25rem'
    }
  },
  '& .expand-button': {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.75rem',
    '& .button-text': {
      fontSize: '0.8rem',
      color: '#6B6C6E',
      fontWeight: 600
    },
    '& .button-icon': {},
    '&:hover': {
      cursor: 'pointer'
    }
  }
}