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
            fontSize: '0.9rem',
            marginBottom: '0.5rem'
          },
        },
      },
      '& .posts': {
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
                border: '1px solid #16C172',
                backgroundColor: 'white',
              },
              '&:focus': {
                border: '1px solid #16C172',
                backgroundColor: 'white',
              }
            },
          }
        },
      },
    },
  }
})
