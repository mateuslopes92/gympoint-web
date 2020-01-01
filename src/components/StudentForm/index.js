import React from 'react';
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
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email()
    .required('O e-mail é obrigatório'),
  age: Yup.number()
    .integer()
    .typeError('A idade precisa ser um número inteiro.')
    .required('A idade é obrigatória'),
  weight: Yup.number()
    .typeError('O peso precisa ser um número com até duas casas decimais.')
    .required('O peso é obrigatório'),
  height: Yup.number()
    .typeError('A altura precisa ser um número com até duas casas decimais.')
    .required('A altura é obrigatória'),
});

export default function StudentForm({ title, from, student }) {
  async function handleSubmit(data, { resetForm }) {
    if (from === 'newStudent') {
      try {
        const newStudent = {
          name: data.name,
          email: data.email,
          age: data.age,
          weight: data.weight,
          height: data.height,
        };

        await api.post('students', newStudent);

        toast.success('Aluno cadastrado com sucesso.');

        resetForm();

        history.push('/students');
      } catch (err) {
        toast.error('Erro no cadastro, verifique os dados');
      }
    } else if (from === 'editStudent') {
      try {
        const editStudent = {
          name: data.name,
          email: data.email,
          age: data.age,
          weight: data.weight,
          height: data.height,
        };

        await api.put(`students/${student.id}`, editStudent);

        toast.success('Cadastro de aluno atualizado com sucesso.');

        setTimeout(function() {
          history.push('/students');
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
          <Link to="/students">
            <MdArrowBack size={22} color="#fff" />
            <span>VOLTAR</span>
          </Link>
        </span>
      </header>
      <Content>
        <Form
          onSubmit={handleSubmit}
          schema={schema}
          initialData={from === 'editStudent' ? student : null}
        >
          <Input name="name" label="NOME COMPLETO" placeholder="ex: Nome " />
          <Input
            name="email"
            type="email"
            label="ENDEREÇO DE E-MAIL"
            placeholder="ex: exemplo@email.com"
          />
          <div>
            <div>
              <Input
                name="age"
                type="number"
                label="IDADE"
                placeholder="ex: 22"
              />
            </div>
            <div>
              <Input
                type="number"
                step="0.01"
                name="weight"
                label="PESO (em kg)"
                placeholder="ex: 60.55"
              />
            </div>
            <div>
              <Input
                name="height"
                type="number"
                step="0.01"
                label="ALTURA (em metros)"
                placeholder="ex: 1.75"
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

StudentForm.propTypes = {
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  student: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
};

StudentForm.defaultProps = {
  student: null,
};
