import styled from "styled-components";

export const RegisterFormStyled = styled.div`
  background-color: var(--color-grey-4);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-0);
  .container-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 368px;
    margin-bottom: 20px;
  }
  .button-back {
    background-color: var(--color-grey-3);
    width: 79px;
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  label {
    p {
      color: var(--color-warning);
      font-size: 12px;
      position: absolute;
      right: 40px;
    }
  }
  h2,
  span {
    margin: 0 auto;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }

  input {
    background-color: var(--color-grey-2);
    height: 48px;
    border: none;
    width: 90%;
    border-radius: 4px;
    padding: 10px;
    color: var(--color-grey-0);
    margin: 0 auto;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    position: relative;
    left: 20px;
  }

  button,
  select {
    height: 48px;
    padding: 5px;
    width: 90%;
    margin: 0 auto;
  }

  form {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    width: 369px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 4px;
    padding: 10px;
  }

  button {
    background-color: var(--color-primary-negative);
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-grey-0);
  }
`;
