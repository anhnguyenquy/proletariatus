export const style = {
  position: 'relative',
  paddingBottom: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  '& .switch-tab-buttons': {
    display: 'flex',
    alignItems: 'center',
    marginRight: '22.5rem',
    marginBottom: '1rem',
    width: '100%',
    '& .tab-button': {
      width: '3.5rem',
      minWidth: '3.5rem',
      textTransform: 'none',
      borderRadius: '3px',
      boxShadow: 'none',
      color: '#6B6C6E',
      fontSize: '0.8rem'
    },
    '& .profiles-button': {
      marginRight: '1rem',
      marginLeft: '-0.2rem',
    },
    '& .pages-button': {
      marginRight: '1rem',
    },
    '& .spaces-button': {

    },
    '& .active': {
      color: '#13AA52 !important',
      position: 'relative',
      '& .selected-indicator': {
        display: 'initial !important',
        position: 'absolute',
        bottom: 0,
        borderBottom: '2px solid #13AA52',
        width: '90%'
      }
    }
  },
  '& .switch-tab-ending-line': {
    position: 'absolute',
    left: 0,
    top: '5.35rem'
  },
  '& .items': {
    '& .profiles': {
      display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      justifyContent: 'space-between',
      // border: '1px solid red',
      '& .profile': {
        display: 'flex',
        alignItems: 'center',
        minWidth: '16.375rem',
        minHeight: '3.5rem',
        '&:hover': {
          cursor: 'pointer'
        },
        margin: '0.25rem 0',
        '& .ava': {
          borderRadius: '50%',
          width: '2.75rem',
          height: '2.75rem'
        },
        '& .infos': {
          marginLeft: '0.5rem',
          '& .name': {
            color: '#000000',
            fontWeight: 600,
            fontSize: '0.9rem',
            '&:hover': {
              color: '#13AA52',
              textDecoration: 'underline',
              textUnderlinePosition: 'under',
              cursor: 'pointer'
            }
          },
          '& .headline': {
            color: '#6B6C6E',
            fontSize: '0.8rem',
            marginTop: '0.2rem',
          },
          '& .followers-no': {
            fontSize: '0.8rem',
            marginTop: '0.2rem',
            '& .actual-number': {
              fontWeight: 600,
              color: '#6B6C6E',
            },
            '& .followers-text': {
              color: '#8A8A8A',
              fontWeight: 500,
            }
          }
        }
      }
    },
    '& .pages': {
      display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      justifyContent: 'space-between',
      // border: '1px solid red',
      '& .page': {
        display: 'flex',
        alignItems: 'center',
        minWidth: '16.375rem',
        minHeight: '3.5rem',
        '&:hover': {
          cursor: 'pointer'
        },
        margin: '0.25rem 0',
        '& .ava': {
          borderRadius: '50%',
          width: '2.75rem',
          height: '2.75rem'
        },
        '& .infos': {
          marginLeft: '0.5rem',
          '& .name': {
            color: '#000000',
            fontWeight: 600,
            fontSize: '0.9rem',
            '&:hover': {
              color: '#13AA52',
              textDecoration: 'underline',
              textUnderlinePosition: 'under',
              cursor: 'pointer'
            }
          },
          '& .followers-no': {
            fontSize: '0.8rem',
            marginTop: '0.2rem',
            '& .actual-number': {
              fontWeight: 600,
              color: '#6B6C6E',
            },
            '& .followers-text': {
              color: '#8A8A8A',
              fontWeight: 500,
            }
          }
        }
      }
    },
    '& .spaces': {
      display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      justifyContent: 'space-between',
      '& .space': {
        display: 'flex',
        alignItems: 'center',
        minWidth: '16.375rem',
        minHeight: '3.5rem',
        '&:hover': {
          cursor: 'pointer'
        },
        margin: '0.25rem 0',
        '& .ava': {
          borderRadius: '50%',
          width: '2.5rem',
          height: '2.5rem'
        },
        '& .infos': {
          marginLeft: '0.5rem',
          '& .space-title': {
            color: '#000000',
            fontWeight: 600,
            fontSize: '0.9rem',
            '&:hover': {
              color: '#13AA52',
              textDecoration: 'underline',
              textUnderlinePosition: 'under',
              cursor: 'pointer'
            }
          },
          '& .space-address': {
            fontSize: '0.8rem',
            marginTop: '0.1rem',
          }
        }
      }
    }
  },
  '& .see-all-button': {
    background: 'none',
    border: 'none',  
    borderTop: '1px solid #E4E6E6',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 0,
    height: '1.75rem',
    color: '#6B6C6E',
    fontSize: '0.9rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#EBEBEB'  
    },
    '&:active': {
      color: '#3E3E3E',
      backgroundColor: '#E0E0E0'
    }
  }
}