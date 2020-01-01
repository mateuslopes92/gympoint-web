import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAddBox, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');

  async function loadStudents(name = '') {
    const response =
      name === ''
        ? await api.get('/students')
        : await api.get(`/students/?q=${name}`);

    setStudents(response.data);
  }

  useEffect(() => {
    loadStudents(studentName);
  }, [studentName]);

  async function handleDelete(id) {
    const result = window.confirm('Deseja realmente excluir o aluno ?');

    if (result === true) {
      try {
        await api.delete(`/students/${id}`);
        toast.success('Aluno deletado com sucesso!');
      } catch (err) {
        toast.error('Algo deu errado.');
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>

        <span>
          <Link to="/newStudent">
            <MdAddBox size={22} color="#fff" />
            <span>CADASTRAR</span>
          </Link>
          <div>
            <MdSearch size={18} color="#999" />
            <input
              value={studentName}
              placeholder="Buscar aluno"
              onChange={e => setStudentName(e.target.value)}
            />
          </div>
        </span>
      </header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>IDADE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <Link to={{ pathname: '/editStudent', state: { student } }}>
                    editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(student.id)}
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
