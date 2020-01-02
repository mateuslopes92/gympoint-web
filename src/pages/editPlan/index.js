import React from 'react';
import PropTypes from 'prop-types';
import PlanForm from '~/components/PlanForm';

export default function editPlan({ location }) {
  return (
    <PlanForm
      title="Edição de plano"
      from="editPlan"
      plan={location.state.plan}
    />
  );
}

editPlan.propTypes = {
  location: PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    .isRequired,
};
