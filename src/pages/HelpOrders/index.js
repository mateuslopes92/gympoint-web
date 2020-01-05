import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '@rocketseat/unform';
import { MdAddBox } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Content,
  AnswerModal,
  AnswerModalBackground,
} from './styles';

export default function HelpOrders() {
  const [visible, setVisible] = useState(false);
  const [helpQuestion, setHelpQuestion] = useState({});
  const [answer, setAnswer] = useState('');
  const [helpOrders, sethelpOrders] = useState([]);

  async function loadHelpOrders() {
    const response = await api.get('/help-orders');

    sethelpOrders(response.data);
  }

  function handleQuestion(question) {
    setHelpQuestion(question);
    setAnswer('');
    setVisible(true);
  }

  async function handleAnswer(id) {
    try {
      const answerContent = { answer };
      console.log();

      await api.put(`/help-orders/${id}/answer`, answerContent);

      toast.success('Pergunta respondida com sucesso.');

      setVisible(false);

      loadHelpOrders();
    } catch (err) {
      toast.error(
        'Erro ao responder pergunta, verifique os dados e tente novamente.'
      );
    }
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);

  return (
    <>
      <AnswerModalBackground visible={visible}>
        <AnswerModal className="AnswerModal" visible={visible}>
          <div>
            <strong>PERGUNTA DO ALUNO</strong>
            <p>{helpQuestion.question}</p>
            <div>
              <Input
                multiline
                type="text"
                name="answer"
                label="SUA RESPOSTA"
                placeholder="Digite aqui sua resposta"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
              />
            </div>
            <button type="button" onClick={() => handleAnswer(helpQuestion.id)}>
              Responder aluno
            </button>
          </div>
        </AnswerModal>
      </AnswerModalBackground>
      <Container>
        <header>
          <h1>Pedidos de auxílio</h1>
        </header>
        <Content>
          <table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {helpOrders.map(question => (
                <tr key={question.id}>
                  <td>{question.student.name}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleQuestion(question)}
                    >
                      responder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
}
