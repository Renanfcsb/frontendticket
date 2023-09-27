import styled from "styled-components";

export const ProfileStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  font-family: "Inter";
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 60%;
    height: 100%;

    .header {
      height: 40px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      flex-direction: row;
      justify-content: space-between;

      button {
        width: 55px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
        border: none;
        border-radius: 4px;
      }
    }
    .line {
      width: 100vw;
      height: 1px;
      background-color: var(--color-grey-3);
      position: absolute;
      right: 0;
    }

    section {
      height: 8rem;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      flex-direction: row;
      justify-content: space-between;
      h2 {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
      }

      p {
        color: var(--color-grey-1);
        font-size: 12px;
        font-weight: 400;
      }
    }
    .containerCardHeader {
      height: 70px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
    .containerCard {
      height: 85%;
      width: 100%;
    }
    main {
      height: 75%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      button {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
        border: none;
        border-radius: 4px;
      }
    }
  }
  @media screen and (max-width: 740px) {
    .container {
      width: 95%;
    }
  }
`;
