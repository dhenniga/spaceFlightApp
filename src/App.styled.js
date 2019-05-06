import styled, { css } from "styled-components";
import background from "./images/background_wide.jpg";
import fullTiltLogo from "./images/full_tilt_logo.png";
import launchButton from "./images/launch_button.png";

export const Application = styled.div`
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100vw;

  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }
`;

export const FullTiltLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  background-image: url(${fullTiltLogo});
  height: 192px;
  width: 269px;
  z-index: 10;
`;

export const LaunchButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-image: url(${launchButton});
  height: 150px;
  width: 768px;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
`;

export const Header = styled.div`
  width: 100vw;
  padding: 80px 0px;

  text-align: center;
  color: white;
`;

export const HeaderH1 = styled.h1`
  font-size: 4em;
`;

export const HeaderSpan = styled.span`
  display: block;
  font-family: sans-serif;
  font-size: 2em;
  width: 60% !important;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Footer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100vw;
  height: 20%;
`;

export const SubFooter = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  height: 12%;
  bottom: 0px;
  width: 100vw;
  color: white;
  text-align: center;
`;

export const SubFooterSpan = styled.span`
  color: white;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 2vh;
`;

export const SubFooterSubText = styled.p`
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

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  min-width: 600px;
  max-width: 1130px;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
  user-select: none;
`;

export const Card = styled.div`
  background-color: white;
  width: 200px;
  height: 120px;
  display: inline-block;
  margin: 20px;
  padding: 20px;
  z-index: 20000;
  border-radius: 5px;
  box-shadow: 10px 10px 30px 0px black;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  pointer-events: none;
  user-select: none;
`;

export const InitialCardsContainer = styled.div``;

export const PartnerCardsContainer = styled.div`
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

export const InfoText = styled.div`
  font-family: sans-serif;
  font-size: 16pt;
  color: white;
  padding: 20px;
  font-weight: 900;
`;
