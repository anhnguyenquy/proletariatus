import React, { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login, SignUp, PageManager, HomePage } from './pages'

type UserContext = {

}
export const UserContext = React.createContext<UserContext>(undefined)
const App = () => {
  // const [userData, setUserData] = useState()
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <Router>
      <UserContext.Provider value={loggedIn}>
        <div className='App'>
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
  );
};

export default App;
