export const customStyles = {
  'check-list': {
    margin: '0.75rem 0',
    '& .title': {
      color: '#8A8A8A !important',
      fontWeight: 500,
      fontSize: '0.8rem',
      fontFamily: 'Montserrat, sans-serif !important',
    },
    '& .options': {
      width: '100% !important',
      outline: 0,
      display: 'flex',
      flexDirection: 'column',
      marginTop: '0.5rem',
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
          fontSize: '0.8rem',
          '& .other-option': {
            display: 'flex',
            alignItems: 'center',
            '& .other-text': {},
            '& input': {
              border: 0,
              outline: 0,
              background: 'transparent',
              borderBottom: '1px solid black',
              marginLeft: '0.5rem',
              fontSize: '0.8rem'
            }
          }
        }
      }
    }
  }
}