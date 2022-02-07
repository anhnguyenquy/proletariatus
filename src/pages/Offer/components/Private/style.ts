export const style = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F3F2EF',
  '& .top-bar': {
    width: '100%',
    height: '129.5px',
    marginTop: '2px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1.5px solid #E4E6E6',
    backgroundColor: 'white',
    '& .offer-infos': {
      // width: '40%',
      height: '7rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      backgroundColor: 'white',
      transition: 'border 0.5s ease-out',
      padding: '0.5rem 0',
      minWidth: '475px',
      marginLeft: '5.5rem',
      '& .ava-container': {
        height: '100%',
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
          width: '6rem',
          height: '6rem'
        }
      },
      '& .main': {
        height: '100%',
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& .offer-title': {
          color: '#13AA52',
          width: '100%',
          paddingLeft: '0.5rem',
          fontWeight: 600
        },
        '& .hovering': {
          textDecoration: 'underline'
        },
        '& .being-clicked': {
          textDecoration: 'underline',
          color: '#116149'
        },
        '& .offer-info': {
          color: '#8A8A8A',
          width: '100%',
          paddingLeft: '0.5rem',
          marginTop: '0.1rem',
          fontSize: '0.6rem'
        },
        '& .workplace': {
          color: '#00000099',
          width: '100%',
          paddingLeft: '0.5rem',
          fontSize: '0.75rem',
          marginTop: '0.25rem'
        },
        '& .location': {
          color: '#00000099',
          width: '100%',
          paddingLeft: '0.5rem',
          fontSize: '0.75rem',
          marginTop: '0.25rem'
        },
        '& .bottom-info': {
          color: '#00000099',
          width: '100%',
          // paddingLeft: '0.5rem',
          fontSize: '0.65rem',
          marginTop: 'auto',
          marginBottom: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          '& .recruitment-status': {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '0.5rem',
            // margin: '0.25rem 0',
            '& .actively-recruiting-text': {
              fontSize: '0.725rem',
              color: '#13AA52'
            },
            '& .closed-text': {
              fontSize: '0.725rem',
              color: '#6B6C6E',
              fontWeight: 600
            }
          },
          '& .post-time': {
            fontSize: '0.725rem',
            color: '#8A8A8A'
          },
          '& .applicants-no': {
            color: '#13AA52',
            fontWeight: 600
          },
        }
      }
    }
  },
  '& .task-buttons': {
    marginLeft: 'auto',
    marginRight: '5rem',
    minWidth: '200px',
    '& .edit-offer-button': {
      marginRight: '0.5rem'
    },
    '& .close-offer-button': {
      textTransform: 'none',
      borderRadius: '20px',
      fontWeight: 600,
      border: '2px solid #13AA52',
      padding: '0.1rem 0.75rem'
    },
    '& .offer-setting-button': {
      marginLeft: '0.5rem',
    },
    '& .MuiTooltip-popper': {
      '& .MuiTooltip-tooltip': {
        height: '2.75rem',
        width: '10rem',
        backgroundColor: 'white !important',
        borderRadius: '0.8rem 0 0.8rem 0.8rem',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.08), 0 4px 4px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '& .see-all-offers-button': {
          width: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          height: '2rem',
          border: 'none',
          background: 'none',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: '#EBEBEB'
          },
          '&:active': {
            backgroundColor: '#E0E0E0',
            '& .tooltip-icon': {
              color: '#000000',
            },
            '& .tooltip-text': {
              color: '#000000',
            }
          },
          '& .tooltip-icon': {
            color: '#5E5E5E',
            marginRight: '0.5rem',
            fontSize: '1rem'
          },
          '& .tooltip-text': {
            color: '#5E5E5E',
            fontSize: '0.9rem'
          }
        }
      }
    }
  },
  '& .applicants-content': {
    minHeight: 'calc(100% - 3rem - 129.5px)',
    width: '100%',
    display: 'flex',
    '& .left-side': {
      width: '30%',
      minWidth: '475px',
      minHeight: 'calc(100vh - 3rem - 129.5px)',
      height: '5rem',
      position: 'relative',
      '& .items': {
        position: 'absolute',
        top: 0,
        right: 0,
        '& .item': {
          display: 'flex',
          width: '400px',
          backgroundColor: 'white',
          '&:hover': {
            cursor: 'pointer',
            '& .applicant-infos': {
              '& .applicant-name': {
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
                textDecorationColor: '#13AA52'
              },
              '& .applicant-headline': {
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
                textDecorationColor: '#13AA52'
              },
              '& .applicant-location': {
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
                textDecorationColor: '#13AA52'
              },
              '& .applicant-workplace': {
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
                textDecorationColor: '#13AA52'
              },
              '& .applicant-status': {
                textDecoration: 'underline',
                textUnderlinePosition: 'under',
                textDecorationColor: '#13AA52'
              }
            }
          },
          '& .left-section': {
            width: '30%',
            display: 'flex',
            justifyContent: 'center',
            '& .applicant-ava': {
              borderRadius: '50%',
              width: '3.5rem',
              height: '3.5rem',
              marginTop: '0.75rem'
            },
          },
          '& .applicant-infos': {
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '& .applicant-name': {
              marginTop: '0.75rem',
              color: '#6B6C6E',
              fontSize: '0.9rem',
              fontWeight: 600
            },
            '& .applicant-headline': {
              color: '#8A8A8A',
              fontSize: '0.75rem',
              marginTop: '0.2rem'
            },
            '& .applicant-location': {
              color: '#8A8A8A',
              fontSize: '0.75rem',
              marginTop: '0.1rem'
            },
            '& .applicant-workplace': {
              fontWeight: 500,
              color: '#8A8A8A',
              marginTop: '0.4rem',
              fontSize: '0.8rem'
            },
            '& .applicant-status': {
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
            }
          }
        }
      }
    },
    '& .right-side': {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      paddingTop: '2rem',
      paddingLeft: '2rem'
    }
  }
}