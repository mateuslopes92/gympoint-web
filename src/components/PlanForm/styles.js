import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
    }
  }

  span {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      background: #cccccc;
      width: 142px;
      height: 36px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      padding: 10px;
      margin-right: 155px;

      &:hover {
        background: ${darken(0.05, '#cccccc')};
      }

      span {
        margin-left: 10px;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 5px 30px 30px;
  border-radius: 4px;
  position: relative;

  form {
    display: flex;
    flex-direction: column;

    span {
      color: #de3b3b;
      margin: 10px;
    }

    input {
      height: 45px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #444;
    }
    label {
      color: #444;
      font-weight: bold;
      padding-bottom: 8px;
      margin-top: 25px;
    }
    div {
      display: flex;
      div {
        display: flex;
        flex-direction: column;
        width: 33%;
        &:nth-child(2) {
          margin: 0 15px;
        }
        input {
          &:disabled {
            background: #f5f5f5;
            border: 1px solid #ddd;
          }
        }
      }
    }

    button {
      position: absolute;
      top: -56px;
      right: 0;
      display: flex;
      align-items: center;
      background: #ee4d64;
      width: 142px;
      height: 36px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }

      svg {
        margin-left: 10px;
      }

      div {
        margin-left: 10px;
      }
    }
  }
`;
