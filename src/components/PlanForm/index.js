import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdSave, MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  duration: Yup.number()
    .integer()
    .typeError('A duração precisa ser um número inteiro.')
    .required('A duração é obrigatória'),
  price: Yup.number()
    .typeError('O preço precisa ser um número com até duas casas decimais.')
    .required('O preço é obrigatório'),
});

export default function PlanForm({ title, from, plan }) {
  console.tron.log(plan);
  const [duration, setDuration] = useState(
    plan && from === 'editPlan' ? plan.duration : 0
  );
  const [price, setPrice] = useState(
    plan && from === 'editPlan' ? plan.price : 0
  );

  const [totalPrice, setTotalPrice] = useState(duration * price);

  useEffect(() => {
    setTotalPrice(duration * price);
  }, [duration, price]);

  async function handleSubmit(data, { resetForm }) {
    if (from === 'newPlan') {
      try {
        const newPlan = {
          title: data.title,
          duration: data.duration,
          price: data.price,
        };

        await api.post('plans', newPlan);

        toast.success('Plano cadastrado com sucesso.');

        resetForm();

        history.push('/plans');
      } catch (err) {
        toast.error('Erro no cadastro, verifique os dados');
      }
    } else if (from === 'editPlan') {
      try {
        const editPlan = {
          title: data.title,
          duration: data.duration,
          price: data.price,
        };

        console.tron.log(editPlan);

        await api.put(`/plans/${plan.id}`, editPlan);

        toast.success('Cadastro de aluno atualizado com sucesso.');

        setTimeout(function() {
          history.push('/plans');
        }, 3000);
      } catch (err) {
        toast.error('Erro na atualização do cadastro, verifique os dados');
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>{title}</h1>

        <span>
          <Link to="/plans">
            <MdArrowBack size={22} color="#fff" />
            <span>VOLTAR</span>
          </Link>
        </span>
      </header>
      <Content>
        <Form
          onSubmit={handleSubmit}
          schema={schema}
          initialData={from === 'editPlan' ? plan : null}
        >
          <Input
            name="title"
            label="TÍTULO DO PLANO"
            placeholder="ex: Titulo "
          />
          <div>
            <div>
              <Input
                name="duration"
                type="number"
                label="DURAÇÃO (em meses)"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                placeholder="ex: 1"
              />
            </div>
            <div>
              <Input
                type="number"
                step="0.01"
                name="price"
                value={price}
                label="PREÇO MENSAL"
                onChange={e => setPrice(e.target.value)}
                placeholder="ex: 129.99"
              />
            </div>
            <div>
              <Input
                name="totalPrice"
                type="number"
                step="0.01"
                value={totalPrice}
                label="PREÇO TOTAL"
                disabled
                placeholder="129.99"
              />
            </div>
          </div>

          <button type="submit">
            <MdSave size={22} color="#fff" />
            <div>SALVAR</div>
          </button>
        </Form>
      </Content>
    </Container>
  );
}

PlanForm.propTypes = {
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  plan: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
};

PlanForm.defaultProps = {
  plan: null,
};
