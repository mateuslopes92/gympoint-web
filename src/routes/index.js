import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import Students from '~/pages/Students';
import editStudent from '~/pages/editStudent';
import newStudent from '~/pages/newStudent';

import Plans from '~/pages/Plans';
import editPlan from '~/pages/editPlan';
import newPlan from '~/pages/newPlan';

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

        <Route path="/plans" component={Plans} isPrivate />
        <Route path="/editPlan" component={editPlan} isPrivate />
        <Route path="/newPlan" component={newPlan} isPrivate />

        <Route path="/registration" component={Registration} isPrivate />
        <Route path="/help-orders" component={HelpOrder} isPrivate />
      </Switch>
    </>
  );
}
