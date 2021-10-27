import React from "react";
import "./App.scss";
import { Format } from "./core/interfaces/Format";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, SignUp, PageManager } from "./pages";
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <Route exact={true} path='/'>
          <HomePage />
        </Route> */}
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
    </Router>
  );
};

export default App;
