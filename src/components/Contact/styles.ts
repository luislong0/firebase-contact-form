import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 24rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  justify-content: center;
  align-items: center;
  
  padding: 3rem 2rem;
  border-radius: 16px;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 2rem;

      label {
        display: flex;
        flex-direction: column;

        gap: 0.75rem;

        margin-bottom: 1rem;

        span {
          color: ${props => props.theme["gray-100"]};
        }
      }

      input {
        padding: 0.75rem 1rem;
        border-radius: 4px;
        border: none;
        color: ${props => props.theme["gray-100"]};


        background-color: ${props => props.theme["gray-900"]};

        &:focus {
          outline: 2px solid ${props => props.theme["green-500"]};
        }
      }

      textarea {
        padding: 0.75rem 1rem;
        height: 200px;
        border-radius: 4px;
        border: none;
        color: ${props => props.theme["gray-100"]};


        background-color: ${props => props.theme["gray-900"]};

        &:focus {
          outline: 2px solid ${props => props.theme["green-500"]};
        }
      }
}
`

export const FormButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-100"]};
  border-radius: 4px;
  border: none;

  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;

  &:hover {
    background-color: ${props => props.theme["green-700"]};
    transition: all ease-in-out 0.2s;
    cursor: pointer;
  }
`