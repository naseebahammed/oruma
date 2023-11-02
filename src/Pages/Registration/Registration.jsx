import React from "react";
import "./Registraltion.scss";
import "bootstrap/dist/css/bootstrap.css";
import gameData from "./../../data";

function Registration() {
  const [Game, Teams] = gameData;
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Team
          </label>
          <select name="" id="">
            {Teams.map((item) => (
              <option value="">{item.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Football
          </label>
          <input type="checkbox" />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Registration;
