import styled from "styled-components";

export const TechsCArdSt = styled.div`
  width: 100%;
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px;
  border-radius: 4px;
  gap: 16px;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    padding: 13px 30px;
    border-radius: 4px;
    cursor: pointer;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 14.21px;
      line-height: 22px;
      color: var(--color-grey-0);
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;
      text-align: right;
      color: var(--color-grey-1);
    }
  }
`;
