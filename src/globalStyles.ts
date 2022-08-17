import { COLORS } from "utils/constant";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
#map {
  height: 550px;
  position: relative;
  z-index: -999;
}
html, body, #root {
  height: 100%;
  font-size: 10px;
  font-family: 'Jost', sans-serif;
  color: ${COLORS.gray};
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
ul {
  list-style: none;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
`;
export default GlobalStyles;
