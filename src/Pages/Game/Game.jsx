import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import gameData from "./../../data";
import { Link } from "react-router-dom";

function Game() {
  const [Game] = gameData;

  return (
    <div className="container-fluid">
      <h2 className="h2">Games</h2>
      <ul className="games-list">
        {Game.map((item) => (
          <Link to={`/games/${item.id}`} key={item.id}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Game;
