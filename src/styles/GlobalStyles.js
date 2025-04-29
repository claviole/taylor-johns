import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${(props) => props.theme.colors.beige};
    color: ${(props) => props.theme.colors.black};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${(props) => props.theme.colors.burnedRed};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${(props) => props.theme.colors.terracotta};
    }
  }
  
  button {
    background-color: ${(props) => props.theme.colors.terracotta};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${(props) => props.theme.colors.burnedRed};
    }
  }
  
  img {
    max-width: 100%;
  }
  
  .accent-text {
    font-family: ${(props) => props.theme.fonts.handwritten};
  }
`;

export default GlobalStyles;
