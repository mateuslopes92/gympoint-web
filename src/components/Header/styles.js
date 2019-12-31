import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      img {
        width: 45px;
        height: 23px;
      }
    }

    strong {
      color: #ee4d64;
      font-size: 15px;
      line-height: 20px;
      font-weight: bold;
      margin-left: 12px;
      align-items: center;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    span {
      display: flex;
      align-items: center;

      a {
        margin-right: 20px;
        color: #999;
      }

      .active {
        color: #444;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 14px;
      line-height: 19px;
      color: #666;
      text-align: right;
    }

    button {
      background: none;
      border: none;
      text-align: right;
      color: #de3b3b;
      font-size: 14px;
      line-height: 19px;
      &:hover {
        color: ${darken(0.05, '#de3b3b')};
      }
    }
  }
`;
