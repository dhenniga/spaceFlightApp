import React from "react";
import { Card, Image } from "./App.styled";

const Astronaut = ({ guid, firstName, lastName, email, phone }) => (
  <Card key={guid}>
    <Image src={require(`./images/astronauts/${guid}.jpg`)} alt="" />
    <p>
      {firstName} {lastName}
    </p>
    {/* <p>{email}</p>
    <p>{phone}</p> */}
  </Card>
);

export default Astronaut;
