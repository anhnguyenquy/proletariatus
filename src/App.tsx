import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WebFont from 'webfontloader'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './core/components/'
import { Login, SignUp, PageManager, HomePage, PageCreator, Settings, Space, Profile, Offer } from './pages'
import './App.scss'

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    lightBackgroundPrimary: true
    red: true
    grey: true
    rejected: true
  }
}

type UserContext = {

}

export const UserContext = createContext<UserContext>(undefined)

const App = () => {
  // const [userData, setUserData] = useState()
  const [loggedIn, setLoggedIn] = useState(true) //default false
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    })
  }, [])
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={loggedIn}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage loggedIn={loggedIn} />} />
              <Route path='login' element={<Login />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='pages' element={<PageManager />} />
              <Route path='new-page' element={<PageCreator />} />
              <Route path='settings' element={<Settings />} />
              <Route path='s' element={<Space />} />
              <Route path='u' element={<Profile />}>
                <Route path=':id' element={<Profile />} />
              </Route>
              <Route path='offer' element={<Offer />}>
                <Route path=':id' element={<Offer />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default App