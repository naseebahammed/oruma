import React from "react";
import { useParams } from "react-router-dom";
import gameData from "./../../data";

function GamesOverview() {
  let { id } = useParams();
  const [Game, Teams] = gameData;

  return (
    <div>
      <p>Game : {id}</p>
    </div>
  );
}

export default GamesOverview;
