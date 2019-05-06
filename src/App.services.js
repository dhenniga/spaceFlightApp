// import React from "react";
import { filter, slice } from "ramda";
import users from "./users.json";

export const shuffle = () => {
  for (let i = users.astronauts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [users.astronauts[i], users.astronauts[j]] = [
      users.astronauts[j],
      users.astronauts[i]
    ];
  }
  console.log(users.astronauts);
  let removedDog = filter(user => {
    return user.email !== "firstdog@space.com";
  }, users.astronauts);

  let result = {
    initialAstronauts: slice(0, 4, removedDog),
    partnerAstronauts: slice(4, 8, removedDog)
  };

  return result;
};
