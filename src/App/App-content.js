import React from "react";
import { map, values } from "ramda";
import Astronaut from "../Astronaut.js";
import { shuffle } from "../App.services";
import {
  Content,
  InitialCardsContainer,
  PartnerCardsContainer,
  InfoText
} from "../App.styled";

let selection = shuffle();

const AppContent = ({ showPartners }) => (
  <Content>
    <InitialCardsContainer>
      {values(
        map(i => (
          <Astronaut
            guid={i.guid}
            firstName={i.name.first}
            lastName={i.name.last}
            email={i.email}
            phone={i.phone}
          />
        ))(selection.initialAstronauts)
      )}
    </InitialCardsContainer>

    <InfoText>
      Press the 'Launch it Now' button to see the partner assignments for this
      Launch
    </InfoText>

    <PartnerCardsContainer showPartners={showPartners}>
      {values(
        map(i => (
          <Astronaut
            guid={i.guid}
            firstName={i.name.first}
            lastName={i.name.last}
            email={i.email}
            phone={i.phone}
          />
        ))(selection.partnerAstronauts)
      )}
    </PartnerCardsContainer>
  </Content>
);

export default AppContent;
