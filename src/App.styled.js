import styled, {
  css
} from "styled-components";
import background from "./images/background_wide.jpg";

export const Background = styled.div `
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  -webkit-animation: slowpan 50s linear 0s infinite alternate;
  position:fixed;
  z-index: -1;
  top: 0px;
  left: 0px;
  @keyframes slowpan {
 0% {
    transform:translateX(-100px) scale(1.25);
  }
  
  100% {
    transform:translateX(100px) scale(1.25);
  }
  
}
`

export const Application = styled.div `
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid !important;
  grid-template-areas: "header" "content" "footer" "subfooter";
  grid-template-rows: 2fr 8fr 0.7fr 1fr;

  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }
`;



export const FullTiltLogoImage = styled.img `
  position: absolute;
  top: 3vh;
  left: 3vh;
  height: auto;
  width: 15%;
`;

export const Header = styled.div `
  width: 70vw;
  grid-area: header;
  text-align: center;
  color: white;
  padding-top: 40px;
  margin: 0px auto;
  max-width: 800px;

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const HeaderH1 = styled.h1 `
  font-size: 30pt;
  display: block;
  
  @media (max-width: 700px) {
    font-size: 16pt;
  }
`;

export const HeaderSpan = styled.span `
  font-family: sans-serif;
  font-size: 20pt;
  margin: 0px auto;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 9pt;
  }

`;

export const Footer = styled.div `
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  overflow: hidden;
  grid-area: footer;
`;

export const LaunchButton = styled.img `
  width: auto;
  height: 100%;
  display: block;
  margin: 0px auto;
`;

export const SubFooter = styled.div `
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  color: white;
  text-align: center;
  grid-area: subfooter;
  align-self: self-end;
  padding: 20px 0px;
`;

export const SubFooterSpan = styled.span `
  color: white;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 2vh;
`;

export const SubFooterSubText = styled.p `
  color: white;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 1.5vh;
  padding-top: 20px;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

////////////////////////////////////

export const Content = styled.div `
  text-align: center;
  pointer-events: none;
  user-select: none;
  grid-area: content;
  align-self: center;

`;

export const Card = styled.div `
  background-color: white;
  width: 10vw;
  height: 100%;
  display: inline-block;
  margin: auto 10px;
  padding-bottom: 10px;
  overflow: hidden;
  z-index: 20000;
  border-radius: 5px;
  box-shadow: 10px 10px 30px 0px black;

  @media (max-width: 700px) {
    width: 10vh;
  }
`;

export const CardText = styled.p`
  font-size: 1.5vh;
`

export const Image = styled.img `
  width: 100%;
  height: auto;
  background-size: cover;
  pointer-events: none;
  user-select: none;
  padding-bottom: 10px;
`;

export const InitialCardsContainer = styled.div ``;

export const PartnerCardsContainer = styled.div `
  transition: all 2s cubic-bezier(0, 0, 0, 1);
  filter: brightness(0);
  opacity: 0.5;

  ${props =>
    props.showPartners &&
    css`
      filter: none;
      opacity: 1;
    `}
`;

export const InfoText = styled.div `
  font-family: sans-serif;
  font-size: 2vh;
  color: white;
  padding: 20px;
  font-weight: 900;
`;