import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

//import MarketingApp from './components/MarketingApp'; // not needed since we lazy load now.
//import AuthApp from './components/AuthApp';  // not needed since we lazy load now.
import Progress from './components/Progress';
import Header from './components/Header';

// So MarketingLazy is a REact component that can decide when to show/hide Marketing
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            {/* <Suspense fallback={<div>Burp...</div>}> */}
            <Switch>
              {/* <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} /> */}
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
