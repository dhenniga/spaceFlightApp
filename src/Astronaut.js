import React from "react";
import { Card, Image, CardText } from "./App.styled";

const Astronaut = ({ guid, firstName, lastName, email, phone }) => 
  <Card 
    key={guid}
    title={email}>
    <Image src={require(`./images/astronauts/${guid}.jpg`)} alt="" />
    <CardText>{firstName}</CardText>
    <CardText>{lastName}</CardText>
  </Card>

export default Astronaut;
