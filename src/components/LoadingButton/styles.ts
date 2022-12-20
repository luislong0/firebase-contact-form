import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme["green-500"]};
  border: 2px solid black;
  border-radius: 4px;
  border: none;

  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`