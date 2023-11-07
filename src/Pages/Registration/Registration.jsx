import React, { useState } from "react";
// import "./Registraltion.scss";
import "bootstrap/dist/css/bootstrap.css";
import gameData from "./../../data";
import styles from "./Registration.module.css";
import axios from "axios";

// import { projectFirestore } from "../../firebase/config";

function Registration() {
  const [Game, Teams] = gameData;

  const url = "http://localhost:4000/api/registration";

  const [formData, setFormData] = useState({
    fName: "",
    phnNumber: "",
    team: "alkhor",
    games: [],
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGames = (e) => {
    const { checked, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      games: checked
        ? [...prevFormData.games, value]
        : prevFormData.games.filter((game) => game !== value),
    }));
  };

  function submit(e) {
    e.preventDefault();

    axios
      .post(url, {
        fName: formData.fName,
        phnNumber: formData.phnNumber,
        team: formData.team,
        games: formData.games,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  // useEffect(() => {
  //   projectFirestore
  //     .collection("team")
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.empty) {
  //         setData(null);
  //       } else {
  //         let results = [];
  //         snapshot.docs.forEach((doc) => {
  //           results.push({ id: doc.id, ...doc.data() });
  //         });
  //         setData(results);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(data);

  return (
    <>
      <form className={styles.reg_form} onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="fName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            name="fName"
            required
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label for="exampleInputEmail1" className="form-label">
            Team
          </label>
          <select name="" id="" className={styles.lt_form_select}>
            {Teams.map((item) => (
              <option value="">{item.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="phnNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phnNumber"
            name="phnNumber"
            required
            onChange={(e) => handle(e)}
          />
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="team" className="form-label me-2 m-0">
            Team
          </label>
          <br />
          <select
            className="form-select form-select-md mb-3"
            name="team"
            id="team"
            value={formData.team}
            required
            onChange={(e) => handle(e)}
          >
            {Teams &&
              Teams.map((item) => (
                <option value={item.value} name={item.value} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="d-flex flex-wrap justify-content-md-around align-content-around mb-3">
          <p>Games</p>
          <br />

          {Game.map((item) => (
            <div
              className="m-1 "
              key={item.id}
              name="game"
              onChange={(e) => handleGames(e)}
            >
              <input
                type="checkbox"
                className="btn-check"
                id={item.value}
                value={item.value}
              />
              <label className="btn btn-outline-dark" htmlFor={item.value}>
                {item.name}
              </label>
            </div>
          ))}
        </div>

        <div className="d-grid">
          <button type="submit" id="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Registration;
