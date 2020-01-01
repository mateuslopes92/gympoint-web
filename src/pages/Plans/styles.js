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
          a {
            font-size: 15px;
            color: #4d85ee;
          }
          button {
            border: none;
            background: none;
            margin-left: 25px;
            color: #de3b3b;
          }
        }
      }
    }
  }
`;
