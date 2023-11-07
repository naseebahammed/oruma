import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gameData from "./../../data";
import axios from "axios";

function GamesOverview() {
  let { id } = useParams();
  const [Game] = gameData;

  const url = "http://localhost:4000/api/games";

  const gameItem = Game.find((item) => item.id === id);

  console.log(gameItem);

  return (
    <div>
      <p>Game : {id}</p>
    </div>
  );
}

export default GamesOverview;
