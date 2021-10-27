import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

export const NormalTextButton = styled(Button)({
  textTransform: 'none',
  color: 'white',
  width: '15rem',
  padding: '0.5rem',
  borderRadius: '5px',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  boxSizing: 'content-box',
  boxShadow: 'none',
  fontFamily: 'Montserrat',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: 'white',
    color: '#13AA52',
    border: '2px solid #13AA52',
  },
})
