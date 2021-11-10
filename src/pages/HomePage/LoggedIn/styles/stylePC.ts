import { makeStyles } from '@mui/styles'

export const useStylesPC = makeStyles({
  'home-page': {
    width: '100%',
    minHeight: '100vh',
    maxWidth: '100vw !important',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F3F2EF',
    '& .main': {
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .button-container': {
        width: '100%',
        height: '14%',
        minHeight: '5rem',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '26rem',
        '& .offers-button': {
          width: '6rem',
          mindWidth: '6rem',
          textTransform: 'none',
          borderRadius: '3px',
          boxShadow: 'none',
          marginRight: '1rem',
        },
        '& .posts-button': {
          width: '6rem',
          mindWidth: '6rem',
          textTransform: 'none',
          borderRadius: '3px',
          boxShadow: 'none',
        },
        '& .active': {
          backgroundColor: 'white !important',
          color: 'black !important',
        },
      },
      '& .offers': {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '3rem',
        boxSizing: 'border-box',
        width: '100%',
        alignItems: 'center',
        minHeight: '27rem',
        '& .filters': {
          width: '67.1%',
          minWidth: '53.25rem',
          display: 'flex',
          flexDirection: 'column',
          height: '7.5rem',
          '& .line-one': {
            width: '100%',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            '& .filter': {
              margin: '0 0.5rem',
              fontSize: '0.9rem !important',
            },
            '& #country': {
              width: '20rem',
            },
            '& #province': {
              width: '10rem',
            },
            '& #skill': {
              width: '11.5rem'
            },
          },
          '& .line-two': {
            width: '100%',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            '& .filter': {
              margin: '0 0.5rem',
              fontSize: '0.9rem !important',
            },
            '& #department': {
              width: '7rem'
            },
            '& #employment-type': {
              width: '9rem'
            },
            '& #pay-range': {
              width: '5rem'
            },
            '& #keyword': {
              width: '10rem',
              // marginLeft: '0.5rem', 
              fontSize: '0.9rem !important',

            },
          
            '& .search-button': {
              textTransform: 'none',
              border: '2px solid #13AA52',
              width: '5rem',
              marginLeft: '2.5rem',
              fontSize: '0.9rem !important',
              '&:hover': {
                border: '2px solid #13AA52',
              },
            },
          },
        },
        '& .content': {
          width: '45%',
          minWidth: '35rem',
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '15px',
          border: '2px solid #E4E6E6',
          minHeight: '10rem',
          '& .title': {
            width: '100%',
            height: '3rem',
            borderBottom: '2px solid #E4E6E6',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '1rem',
            fontWeight: '600',
            fontColor: '#000000e6',
            fontSize: '0.9rem'
          },
        },
      },
      '& .posts': {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '58rem',
        marginBottom: '3rem',
        // border: '1px solid grey'
      },
    },
  }
})
