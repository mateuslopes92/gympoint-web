import React from 'react';
import PropTypes from 'prop-types';

import RegistrationForm from '~/components/RegistrationForm';

export default function editRegistration({ location }) {
  return (
    <RegistrationForm
      title="Edição de matrícula"
      from="editRegistration"
      registration={location.state.registration}
    />
  );
}

editRegistration.propTypes = {
  location: PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    .isRequired,
};
