import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
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
      background: #ee4d64;
      width: 142px;
      height: 36px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      padding: 10px;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
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
  padding: 30px;
  border-radius: 4px;

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border: none;
      text-align: left;
      height: 50px;

      &:not(:last-of-type) {
        border-bottom: 1px solid #eee;
      }

      th {
        font-size: 16px;
        text-align: left;

        &:nth-child(3) {
          text-align: center;
        }
        &:nth-child(2) {
          text-align: center;
        }
      }

      td {
        color: #666666;

        &:nth-child(3) {
          text-align: center;
        }
        &:nth-child(2) {
          text-align: center;
        }
        &:last-child {
          text-align: right;

          button {
            border: none;
            background: none;
            margin-left: 25px;
            font-size: 15px;
            color: #4d85ee;
          }
        }
      }
    }
  }
`;

export const AnswerModalBackground = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const AnswerModal = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 450px;
  height: 425px;
  z-index: 10;
  div {
    margin: 30px;
    width: 390px;
    height: 365px;
    strong {
      font-size: 14px;
      line-height: 19px;
    }
    p {
      max-width: 388px;
      height: 100px;
      margin-top: 10px;
      margin-bottom: 25px;
      word-wrap: break-word;
    }
    div {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      height: 125px;
      textarea {
        height: 100%;
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #444;
        resize: none;
      }
      label {
        color: #444;
        font-weight: bold;
        padding-bottom: 8px;
      }
    }
    button {
      height: 45px;
      width: 100%;
      color: #fff;
      background: #ee4d64;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
