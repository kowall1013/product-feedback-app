import { COLORS, QUERIES } from "utils/constant";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {  
	--transition-speed: 0.3s;
}

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
  font-size: 62.5%;
  font-family: 'Jost', sans-serif;
  color: ${COLORS.gray};
  background-color: ${COLORS.WhiteDarker}
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
