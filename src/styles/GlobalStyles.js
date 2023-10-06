import { createGlobalStyle } from "styled-components";

import MyFontBold from "../fonts/Outfit-SemiBold.ttf";
import MyFontMedium from "../fonts/Outfit-Medium.ttf";
import MyFontRegular from "../fonts/Outfit-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'MyFont';
    src: url(${MyFontRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyFontBold';
    src: url(${MyFontBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyFontMedium';
    src: url(${MyFontMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

 body {
    margin: 0;
    padding: 0;
    font-family: 'MyFont', sans-serif;
   box-sizing: border-box;
    
  }
  button,
  input,
  textarea{
    font-family: 'MyFont', sans-serif;
  }

  input[type="checkbox"]{
    appearance: none;
    width: 1.2em;
  height: 1.2em;
  border: 2px solid #c2c2c2;
  border-radius: 3px;
  display: grid;
  place-content: center;

}

input[type="checkbox"]::before{
    content: '✔';
   
    font-size: 12px;
    display: flex;
    transform: scale(0);
  transition: 200ms transform ease-in-out;
    
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
`;
