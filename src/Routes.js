import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Account as AccountView,
  LogJump as LogJumpView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

//will this comment be checked in?
const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout component={DashboardView} exact layout={MainLayout}  path="/dashboard"/>
      <RouteWithLayout component={AccountView} exact layout={MainLayout} path="/account"/>
      <RouteWithLayout component={LogJumpView} exact layout={MainLayout} path="/log-jump"/>
      <RouteWithLayout component={SettingsView} exact layout={MainLayout} path="/settings" />
      <RouteWithLayout component={SignUpView} exact layout={MinimalLayout} path="/sign-up"/>
      <RouteWithLayout component={SignInView} exact layout={MinimalLayout} path="/sign-in"/>
      <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found"/>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
