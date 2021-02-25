import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as Routes from './constants/routes'
const Dashboard = lazy(() => import("./pages/dashboard"))
const Login = lazy(() => import("./pages/login"))
const SignUp = lazy(() => import("./pages/signup"))
const Profile = lazy(() => import("./pages/profile"))
const NotFound = lazy(() => import("./pages/not-found"))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading....</p>}>
       <Switch>
         <Route path={Routes.LOGIN} component={Login}/>
          <Route path={Routes.SIGN_UP} component={SignUp} />
          <Route path={Routes.PROFILE} component={Profile} />
          <Route path={Routes.DASHBOARD} component={Dashboard} exact />
          <Route path={Routes.NOT_FOUND} component={NotFound} />

       </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
