import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 360px;
  text-align: center;
  align-items: center;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-top: 20px;
      font-weight: bold;
    }

    input {
      width: 300px;
      height: 45px;
      margin-top: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0 3px 0 15px;

      &::placeholder {
        color: #999999;
        margin: 0 0 10px;
      }
    }

    span {
      color: #f64c75;
      margin-top: 10px;
      font-weight: bold;
    }

    button {
      background: #ee4d64;
      color: #fff;
      font-weight: bold;
      width: 300px;
      height: 45px;
      margin-top: 15px;
      border-radius: 4px;
      border: none;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
