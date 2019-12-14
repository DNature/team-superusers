import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteWithLayout } from './components/RouteWithLayout';

import { Main as MainLayout } from './Layout';

import { Home, BuyAHouse, SellPage, NotFound } from './pages';

const Routes = () => {
  return (
    <>
      <Switch>
        <RouteWithLayout layout={MainLayout} path='/' exact component={Home} />
        <RouteWithLayout
          layout={MainLayout}
          path='/buy'
          exact
          component={BuyAHouse}
        />
        <RouteWithLayout
          layout={MainLayout}
          path='/sell'
          exact
          component={SellPage}
        />
        <RouteWithLayout
          layout={MainLayout}
          path='/rent'
          exact
          component={Home}
        />
        <RouteWithLayout layout={NotFound} path='/*' exact component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
