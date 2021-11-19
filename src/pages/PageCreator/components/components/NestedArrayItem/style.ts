import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  'nested-array-item': {
    width: '100%',
    '& .item-label': {
      display: 'flex',
      alignItems: 'center',
      '& .label-text': {
        fontSize: '0.7rem',
        marginRight: '0.25rem',
      },
      '& .big-label': {
        color: '#8A8A8A',
        fontSize: '0.8rem',
        fontWeight: 500,
        marginBottom: '0.4rem',

      },
      '& .icon-button': {
        fontSize: '0.6rem',
        width: '1.25rem',
        height: '1.25rem',
        padding: 0,
        '& .fa-trash': {
          color: '#13AA52',
        }
      }
    },
    '& .items': {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      // border: '1px solid red'
    }
  }
})

export const useMenuStyles = makeStyles({
  menu: {
    maxHeight: '20rem',
    width: '15rem',
  }
})