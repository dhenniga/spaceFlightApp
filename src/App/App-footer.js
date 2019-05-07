import React from "react";
import {
  Footer,
  LaunchButton,
  SubFooter,
  SubFooterSpan,
  SubFooterSubText
} from "../App.styled";

const AppFooter = ({ 
  handleClick,
  children
}) => 

  <React.Fragment>

    <Footer>

    <LaunchButton
          src={require('../images/launch_button.png')}
          alt=""
          onClick={handleClick}
        />

    </Footer>

    <SubFooter>

      <SubFooterSpan>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </SubFooterSpan>

      <SubFooterSubText>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </SubFooterSubText>

    </SubFooter>

  </React.Fragment>

export default AppFooter;
