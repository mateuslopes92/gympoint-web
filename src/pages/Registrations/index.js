/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAddBox, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  async function loadRegistrations() {
    const response = await api.get('/registrations');

    const data = response.data.map(registration => {
      return {
        ...registration,
        formatedStartDate: format(
          parseISO(registration.start_date),
          "dd' de 'MMMM' de 'yyyy",
          {
            locale: pt,
          }
        ),
        formatedEndDate: format(
          parseISO(registration.end_date),
          "dd' de 'MMMM' de 'yyyy",
          {
            locale: pt,
          }
        ),
      };
    });

    setRegistrations(data);
  }

  useEffect(() => {
    loadRegistrations();
  }, []);

  async function handleDelete(id) {
    const result = window.confirm('Deseja realmente excluir a matrícula ?');

    if (result === true) {
      try {
        await api.delete(`/registrations/${id}`);
        toast.success('Matrícula deletada com sucesso!');
      } catch (err) {
        toast.error('Algo deu errado.');
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando matrículas</h1>

        <span>
          <Link to="/newRegistration">
            <MdAddBox size={22} color="#fff" />
            <span>CADASTRAR</span>
          </Link>
        </span>
      </header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INICIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.formatedStartDate}</td>
                <td>{registration.formatedEndDate}</td>
                <td>
                  {registration.active ? (
                    <MdCheckBox size={26} color="#42CB59" />
                  ) : (
                    <MdCheckBoxOutlineBlank size={26} color="#ddd" />
                  )}
                </td>
                <td>
                  <Link
                    to={{
                      pathname: '/editRegistration',
                      state: { registration },
                    }}
                  >
                    editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(registration.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
