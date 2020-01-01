import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '~/components/StudentForm';

export default function editStudent({ location }) {
  return (
    <StudentForm
      title="Edição de aluno"
      from="editStudent"
      student={location.state.student}
    />
  );
}

editStudent.propTypes = {
  location: PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    .isRequired,
};
