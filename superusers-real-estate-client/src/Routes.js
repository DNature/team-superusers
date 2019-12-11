import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main as MainLayout } from './Layout';

import { Home } from './pages';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainLayout}>
          <MainLayout />
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
