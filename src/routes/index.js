import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import Students from '~/pages/Students';
import editStudent from '~/pages/editStudent';
import newStudent from '~/pages/newStudent';

import Plan from '~/pages/Plan';
import Registration from '~/pages/Registration';
import HelpOrder from '~/pages/HelpOrder';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/students" component={Students} isPrivate />
        <Route path="/editStudent" component={editStudent} isPrivate />
        <Route path="/newStudent" component={newStudent} isPrivate />

        <Route path="/plans" component={Plan} isPrivate />
        <Route path="/registration" component={Registration} isPrivate />
        <Route path="/help-orders" component={HelpOrder} isPrivate />
      </Switch>
    </>
  );
}
