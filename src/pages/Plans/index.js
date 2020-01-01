import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAddBox } from 'react-icons/md';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('/plans');

    setPlans(response.data);
  }

  useEffect(() => {
    loadPlans();
  }, []);

  async function handleDelete(id) {
    const result = window.confirm('Deseja realmente excluir o plano ?');

    if (result === true) {
      try {
        await api.delete(`/plans/${id}`);
        toast.success('Plano deletado com sucesso!');
      } catch (err) {
        toast.error('Algo deu errado.');
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>

        <span>
          <Link to="/newPlan">
            <MdAddBox size={22} color="#fff" />
            <span>CADASTRAR</span>
          </Link>
        </span>
      </header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/ MÊS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>
                  {plan.duration > 1
                    ? `${plan.duration} meses`
                    : `${plan.duration} mês`}
                </td>
                <td>R$ {plan.price.toFixed(2)}</td>
                <td>
                  <Link to={{ pathname: '/editPlan', state: { plan } }}>
                    editar
                  </Link>
                  <button type="button" onClick={() => handleDelete(plan.id)}>
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
