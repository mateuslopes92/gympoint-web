import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import Students from '~/pages/Students';
import Plan from '~/pages/Plan';
import Registration from '~/pages/Registration';
import HelpOrder from '~/pages/HelpOrder';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/students" component={Students} isPrivate />
        <Route path="/plans" component={Plan} isPrivate />
        <Route path="/registrations" component={Registration} isPrivate />
        <Route path="/help-orders" component={HelpOrder} isPrivate />
      </Switch>
    </>
  );
}
