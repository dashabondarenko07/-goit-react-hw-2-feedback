import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px, 4px;

  background-color: #ffffff;

  border-radius: 4px;
  border-width: 1px;

  &:not(:last-child) {
    margin-right: 4px;
  }

  &:active {
    color: #ffffff;
    background-color: #1e76e3;
  }
`;
