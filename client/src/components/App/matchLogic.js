import React, { useState } from "react";

const matchLogic = () => {
  const user1MovieOne = 1;
  const user1MovieTwo = 2;
  const user1MovieThree = 3;
  const user1MovieFour = 4;
  const user1MovieFive = 5;

  const user2MovieOne = 1;
  const user2MovieTwo = 2;
  const user2MovieThree = 3;
  const user2MovieFour = 4;
  const user2MovieFive = 5;

  if (user1MovieOne === user2MovieOne) {
    return <div>{user2MovieOne/user1MovieTwo}</div>;
  }

  console.log("matchLogic");
};
export default matchLogic;
