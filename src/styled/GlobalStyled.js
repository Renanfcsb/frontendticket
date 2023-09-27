import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative:#59323f;
    --color-grey-4:#121214;
    --color-grey-3:#212529;
    --color-grey-2:#343b41;
    --color-grey-1:#868e96;
    --color-grey-0:#f8f9fa;
    --color-success: #3fe864;
    --color-warning: #e83f5b;
    --grey-opacity-1:rgba(33, 37, 41, 0.5);
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
  h1 {
    font-size: 4.3rem;
  }
  button {
    cursor: pointer;
  }
  button:hover{
    filter: brightness(90%);
  }
`;
