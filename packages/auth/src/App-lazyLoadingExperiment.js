import React, { Suspense, lazy } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import Signin from './components/Signin';
// import Signup from './components/Signup';

const Signin = lazy(() => import('./components/Signin'));
const Signup = lazy(() => import('./components/Signup'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Suspense fallback={<div>Loading Now...</div>}>
            <Switch>
              <Route path='/auth/signin' component={Signin} />
              <Route path='/auth/signup' component={Signup} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </div>
  );
};
