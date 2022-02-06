import { useState } from 'react'
import { Box, Button } from '@mui/material'
import { Applied } from './Applied'
import { Posted } from './Posted' 
import { style } from './style'

export const Offers = (): JSX.Element => {
  const [active, setActive] = useState('applied')
  return (
    // @ts-ignore
    <Box className='offers' sx={style}>
      <div className='switch-button-container'>
        <Button
          className={`applied-button ${active == 'applied' ? 'active' : ''}`}
          variant={`${active == 'applied' ? 'contained' : 'text'}`}
          onClick={() => { setActive('applied') }}
        >
          <div className='button-text'>Applied</div>
        </Button>
        <Button
          className={`posted-button ${active == 'posted' ? 'active' : ''}`}
          variant={`${active == 'posted' ? 'contained' : 'text'}`}
          onClick={() => { setActive('posted') }}
        >
          <div className='button-text'>Posted</div>
        </Button>
      </div>
      {
        active == 'applied' &&
        <Applied />
      }
      {
        active == 'posted' &&
        <Posted />
      }
    </Box>
  )
}