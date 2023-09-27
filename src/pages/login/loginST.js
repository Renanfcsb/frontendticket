import styled from "styled-components";

export const LoginStyled = styled.div`
  background-color: var(--color-grey-4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  div {
    display: flex;
    gap: 10px;
  }

  a {
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    button {
      text-decoration: none;
      background-color: var(--color-grey-1);
      color: var(--color-grey-0);
    }
  }

  .LoginContainer {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    width: 369px;
    height: 502px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 4px;
    padding: 10px;
    align-items: center;
  }
  button {
    height: 48px;
    padding: 5px;
    width: 90%;
    border-radius: 4px;
  }
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
  }
  input {
    background-color: var(--color-grey-2);
    height: 48px;
    border: none;
    border-radius: 4px;
    padding: 10px;
    color: var(--color-grey-0);
  }
  button {
    height: 48px;
    padding: 5px;
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
  }
`;
