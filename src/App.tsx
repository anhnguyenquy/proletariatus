import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { theme } from './core/components/'
import { ThemeProvider } from '@mui/material/styles'
import useStyles from './appStyle'
import { Login, SignUp, PageManager, HomePage, PageCreator, Settings } from './pages'

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    lightBackgroundPrimary: true
    red: true
  }
}

type UserContext = {

}
export const UserContext = React.createContext<UserContext>(undefined)
const App = () => {
  const classes = useStyles()
  // const [userData, setUserData] = useState()
  const [loggedIn, setLoggedIn] = useState(true) //default false
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserContext.Provider value={loggedIn}>
          <div className={classes.App}>
            <Switch>
              <Route exact={true} path='/'>
                <HomePage loggedIn={loggedIn} />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/sign-up'>
                <SignUp />
              </Route>
              <Route path='/pages'>
                <PageManager />
              </Route>
              <Route path='/new-page'>
                <PageCreator />
              </Route>
              <Route path='/settings'>
                <Settings />
              </Route>
              {/* <Route path='/s'>
          <Space />
        </Route>
        <Route path='/u'>
          <Profile />
        </Route>
        <Route path='/p'>
          <Page />
        </Route> */}
            </Switch>
          </div>
        </UserContext.Provider>
      </Router>
    </ThemeProvider>
  )
}

export default App
