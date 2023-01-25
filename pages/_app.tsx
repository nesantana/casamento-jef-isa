import type { AppProps } from 'next/app'

import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  
  html, body, main {
    padding: 0;
    margin: 0;
    background-color: #fff3f2;
  }

  * {
    box-sizing: border-box;
  }

  img:not(.arabesco) {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
  }

  .button {
    background: #FF8989;
    color: #FFFFFF;
    padding: 10px 20px;
    width: 100%;
    display: flex;
    cursor: pointer;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
    
    svg {
      margin-left: 5px;
      font-size: 20px;
    }
  }

  .gifts-open {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, .7);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);

    h3 {
      font-size: 18px;
      margin-top: 20px;
    }
    
    h5 {
      font-size: 14px;
    }

    h4 {
      margin-top: 10px;
      background: #FF8989;
      color: #FFFFFF;
      font-size: 14px;
      padding: 10px 20px;
      margin: 0;
      margin-top: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      svg {
        margin-left: 5px;
        font-size: 20px;
      }
    }
  }

  input, select {
    width: 100%;
    height: 45px;
    margin-bottom: 30px;
    border-radius: 5px;
    padding: 0 10px;
    border: 0;
    outline: none;
  }
  
  textarea {
    width: 100%;
    height: 145px;
    border-radius: 5px;
    padding: 10px;
    border: 0;
    outline: none;
    margin-bottom: 30px;
  }

  .gifts {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, .7);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
    cursor: pointer;

    h3 {
      font-size: 18px;
      margin-top: 20px;
      height: 63px;
    }

    h4 {
      margin-top: 10px;
      background: #FF8989;
      color: #FFFFFF;
      font-size: 14px;
      padding: 10px 20px;
      margin: 20px -20px -20px -20px;
      border-radius: 0 0 10px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      svg {
        margin-left: 5px;
        font-size: 20px;
      }
    }
  }

  h1, h2 {
    color: #FF8989;
    font-family: "Montserrat", Sans-serif;
    font-size: 30px;
    font-weight: 100;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
    color: #7A7A7A;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}
