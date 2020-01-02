import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logoHeader.svg';

import { Container, Content } from './styles';

export default function Header() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const pathName = window.location.pathname;
  let active;

  switch (pathName) {
    case '/students':
    case '/newStudent':
    case '/editStudent':
      active = 'Student';
      break;
    case '/plans':
    case '/newPlan':
    case '/editPlan':
      active = 'Plan';
      break;
    case '/registrations':
    case '/newRegistration':
    case '/editRegistration':
      active = 'Registrations';
      break;
    case '/help-orders':
      active = 'HelpOrders';
      break;
    default:
      active = '';
      break;
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/students">
            <img src={logo} alt="Gympoint" />
            <strong>GYMPOINT</strong>
          </Link>
          <span>
            <Link
              to="/students"
              className={active === 'Student' ? 'active' : ''}
            >
              ALUNOS
            </Link>
            <Link to="/plans" className={active === 'Plan' ? 'active' : ''}>
              PLANOS
            </Link>
            <Link
              to="/registrations"
              className={active === 'Registrations' ? 'active' : ''}
            >
              MATRÍCULAS
            </Link>
            <Link
              to="/help-orders"
              className={active === 'HelpOrders' ? 'active' : ''}
            >
              PEDIDOS DE AUXÍLIO
            </Link>
          </span>
        </nav>
        <aside>
          <strong>{user.name}</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
