import React, { useState } from "react";
import AppHeader from "./App/App-header";
import AppContent from "./App/App-content";
import AppFooter from "./App/App-footer";
import { 
  Application, 
  FullTiltLogoImage,
  Background
} from "./App.styled";

const App = () => {

  const [showPartners, setShowPartners] = useState(false);

  return <Application>
    
      <Background />

      <FullTiltLogoImage
        src={require('./images/full_tilt_logo.png')} />

      <AppHeader />

      <AppContent 
        showPartners={showPartners} />

      <AppFooter
        handleClick={() => setShowPartners(true)} />
        
    </Application>
}

export default App;
