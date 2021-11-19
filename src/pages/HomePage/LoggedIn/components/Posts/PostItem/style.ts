import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'post-item': {
    border: '1.5px solid #E4E6E6',
    borderRadius: '5px',
    width: '40rem',
    minHeight: '5rem',
    // maxHeight: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    margin: '0.25rem',
    height: 'max-content !important',
    '&:hover': {
      border: '1.5px solid #A5A5A5',
    },
    '& .left-col': {
      alignSelf: 'stretch',
      width: '2rem',
      borderRight: '1.5px solid #E4E6E6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#F8F9FA',
      '& .upvote-button': {
        width: '1.7rem',
        height: '1.7rem',
        marginTop: '0.5rem',
        marginBottom: '0.15rem',
        '& .upvote-icon': {
          color: 'white',
          textStroke: '1.5px #959799',
          fontSize: '1.2rem',
          '&:hover': {
            textStroke: '1.5px #13AA52',
          },
        },
        '& .active': {
          color: '#13AA52 !important',
          textStroke: '1.5px #13AA52',
        },
      },
      '& .number-of-votes': {
        fontWeight: '600',
        fontSize: '0.6rem',
      },
      '& .downvote-button': {
        marginTop: '0.15rem',
        width: '1.7rem',
        height: '1.7rem',
        '& .downvote-icon': {
          color: 'white',
          textStroke: '1.5px #959799',
          fontSize: '1.2rem',
          '&:hover': {
            textStroke: '1.5px #647dce',
          },
        },
        '& .active': {
          color: '#647dce !important',
          textStroke: '1.5px #647DCE',
        },
      },
    },
    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      height: '100%',
      '& .post-details': {
        display: 'flex',
        alignItems: 'center',
        height: '1.2rem',
        marginLeft: '0.5rem',
        marginTop: '0.25rem',
        '& .space-icon-container': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& .space-icon': {
            width: '1rem',
            height: '1rem',
          },
        },
        '& .space-name': {
          fontWeight: 600,
          fontSize: '0.65rem',
          marginLeft: '0.2rem',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            padding: 0,
            '&:hover': {
              textDecoration: 'underline #787C7E solid',
              color: 'inherit',
            },
            '&:visited': {
              color: 'inherit',
            },
            '&:active': {
              color: 'inherit',
            },
          },
        },
        '& .posted-by': {
          fontSize: '0.65rem',
          fontColor: '#787C7E',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              textDecoration: 'underline #787C7E solid',
              color: 'inherit',
            },
            '&:visited': {
              color: 'inherit',
            },
            '&:active': {
              color: 'inherit',
            },
          },
        },
        '& .interpunct': {
          fontSize: '0.65rem',
          fontColor: '#787C7E',
        },
        '& .post-time': {
          fontSize: '0.65rem',
          fontColor: '#787C7E',
        },
      },
      '& .post-title': {
        marginLeft: '0.5rem',
        fontWeight: 500,
        marginTop: '0.5rem',
        width: '36rem',
        color: '#363636',
      },
      '& .post-content': {
        marginLeft: '0.5rem',
        marginTop: '0.55rem',
        '& .post-text': {
          color: 'rgb(26, 26, 27)',
          fontSize: '0.875rem',
          width: '36rem',
        },
        '& .image-container': {
          width: '36rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0.5rem 0',
          '& img': {
            width: '100%'
          }
        }
      },
      '& .bottom-section': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.5rem',
        marginBottom: '0.25rem',
        marginLeft: '0.5rem',
        width: '100%',
        '& .comments': {
          display: 'flex',
          alignItems: 'center',
          padding: '0.2rem',
          borderRadius: '2px',
          '&:hover': {
            backgroundColor: '#E8E8E8',
          },
          '& .comment-icon': {
            color: '#8f9294',
            fontSize: '0.8rem',
          },
          '& .number-of-comments': {
            fontSize: '0.65rem',
            fontWeight: 600,
            color: '#787C7E',
            marginLeft: '0.2rem',
          },
          marginRight: '1rem',
        },
        '& .share': {
          display: 'flex',
          alignItems: 'center',
          padding: '0.2rem',
          borderRadius: '2px',
          '&:hover': {
            backgroundColor: '#E8E8E8',
          },
          '& .fa-share': {
            color: '#8f9294',
            fontSize: '0.8rem',
          },
          '& .share-text': {
            fontSize: '0.65rem',
            fontWeight: 600,
            color: '#787C7E',
            marginLeft: '0.2rem',
          },
        },
      },
    },
  }
})
