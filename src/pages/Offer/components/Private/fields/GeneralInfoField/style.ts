export const style = {
  '& .headline': {
    color: '#8A8A8A',
    fontSize: '0.75rem',
    marginTop: '0.2rem'
  },
  '& .location': {
    color: '#8A8A8A',
    fontSize: '0.75rem',
    marginTop: '0.1rem'
  },
  '& .workplace': {
    fontWeight: 500,
    color: '#8A8A8A',
    marginTop: '0.4rem',
    fontSize: '0.8rem'
  },
  '& .status': {
    fontSize: '0.75rem',
    marginTop: '0.4rem',
    marginBottom: '0.75rem'
  },
  '& .awaiting': {
    color: '#8A8A8A',
  },
  '& .accepted': {
    color: '#13AA52',
    fontWeight: 600
  },
  '& .rejected': {
    color: '#D22D33',
    fontWeight: 600
  },
  '& .action-buttons': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    '& .accept-button': {
      textTransform: 'none',
      border: '2px solid #13AA52',
      borderRadius: '20px',
      marginRight: '0.75rem',
      fontWeight: 600,
      '& .text': {
        margin: '0 0.75rem'
      }
    },
    '& .reject-button': {
      textTransform: 'none',
      border: '2px solid #D22D33',
      borderRadius: '20px',
      marginRight: '0.75rem',
      fontWeight: 600,
      '& .text': {
        margin: '0 0.75rem'
      }
    },
    '& .accepted-button': {
      textTransform: 'none',
      borderRadius: '20px',
      marginRight: '0.75rem',
      '& .text': {
        margin: '0 0.75rem',
        color: '#ADADAD',
        fontWeight: 600,
      },
      border: 'none',
      backgroundColor: '#EBEBEB'
    },
    '& .rejected-button': {
      textTransform: 'none',
      borderRadius: '20px',
      marginRight: '0.75rem',
      '& .text': {
        margin: '0 0.75rem',
        color: '#ADADAD',
        fontWeight: 600,
      },
      border: 'none',
      backgroundColor: '#EBEBEB'
    },
    '& .more-button': {
      textTransform: 'none',
      borderRadius: '20px',
      marginRight: '0.75rem',
      border: '2px solid #636363',
      backgroundColor: '#EBEBEB',
      '& .text': {
        color: '#5E5E5E',
        fontWeight: 600,
        margin: '0 0.75rem'
      }
    },
    '& .MuiTooltip-popper': {
      '& .MuiTooltip-tooltip': {
        width: '15rem',
        backgroundColor: 'white !important',
        borderRadius: '0 0.8rem 0.8rem 0.8rem',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.08), 0 4px 4px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: '0.5rem 0',
        '& .option-button': {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: '2rem',
          border: 'none',
          background: 'none',
          justifyContent: 'flex-start',
          margin: '0.25rem 0',
          '&:hover': {
            backgroundColor: '#EBEBEB'
          },
          '&:active': {
            backgroundColor: '#E0E0E0',
            '& .tooltip-icon': {
              color: '#000000',
            },
            '& .tooltip-texts': {
              '& .main-text': {
                color: '#000000',
              },
              '& .subtext': {
                color: '#6B6C6E',
              }
            }
          },
          '& .tooltip-icon': {
            color: '#5E5E5E',
            margin: '0 0.5rem',
            fontSize: '1rem',
          },
          '& .tooltip-texts': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& .main-text': {
              color: '#5E5E5E',
              fontSize: '0.8rem'
            },
            '& .subtext': {
              fontSize: '0.7rem',
              color: '#8A8A8A',
            }
          }
        }
      }
    },
    '& .copied-notification': {
      display: 'flex',
      alignItems: 'center',
      '& .notification-icon': {
        color: '#057642',
      },
      '& .notification-text': {
        fontSize: '0.8rem',
        color: '#057642',
        marginLeft: '0.25rem'
      }      
    }
  }
}