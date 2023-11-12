import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import gameData from "./../../data";
import axios from "axios";

function GamesOverview() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [Game] = gameData;

  const url = "http://localhost:4000/api/games";

  const gameItem = Game.find((item) => item.id == id);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => setData(response.data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const outputData = data.item;
  console.log(outputData);
  return (
    <div>
      <p className="text-light">Game : {gameItem.name}</p>
      <p className="text-light">Game : </p>
    </div>
  );
}

export default GamesOverview;
