import styled from "styled-components";

export const ModalModelST = styled.div`
  background-color: var(--grey-opacity-1);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;

  .modalCard {
    background-color: var(--color-grey-3);
    border-radius: 4px;
  }

  .modalHeader {
    background-color: var(--color-grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 4px 4px 0 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    button {
      color: var(--color-grey-1);
      background-color: var(--color-grey-2);
      border: none;
      font-size: 16px;
    }
    button:hover {
      filter: brightness(100%);
    }
  }
  .btContainer {
    display: flex;
    justify-content: space-around;
    button {
      padding: 0 20px;
    }
    .btGrey {
      background-color: var(--color-grey-1);
    }
  }
  .modalContent {
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 20px;
    color: var(--color-grey-0);
    width: 30vw;
    input {
      height: 48px;
      border: 1px solid var(--color-grey-0);
      color: var(--color-grey-0);
      background-color: var(--color-grey-2);
      border-radius: 4px;
      padding: 20px;
    }
    select {
      height: 48px;
      border: 1px solid var(--color-grey-0);
      color: var(--color-grey-0);
      background-color: var(--color-grey-2);
      border-radius: 4px;
      font-size: 18px;
    }
    button {
      height: 48px;
      background-color: var(--color-primary);
      color: var(--color-grey-0);
      border: none;
      border-radius: 4px;
      margin: 10px 0;
    }
  }
  @media screen and (max-width: 700px) {
    .modalContainer {
      width: 100%;
    }
    .modalHeader {
      width: 100%;
    }

    .modalContent {
      width: 100%;
      input,
      button,
      select {
        width: 100%;
      }
    }
    .btContainer {
      display: flex;
      justify-content: space-around;
      button {
        padding: 0 15px;
      }
    }
  }
`;
