import React from "react";
// import "./Registraltion.scss";
import "bootstrap/dist/css/bootstrap.css";
import gameData from "./../../data";
import styles from "./Registration.module.css";

function Registration() {
  const [Game, Teams] = gameData;
  return (
    <>
      <form className={styles.reg_form}>
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

        <div className="mb-3 d-flex align-items-center">
          <label for="exampleInputEmail1" className="form-label me-2 m-0">
            Football
          </label>
          <input type="checkbox" className={styles.checkinput_box} />
        </div>

        <div className="mb-3 ms-0 ps-0 form-check">
          <input
            type="checkbox"
            className={styles.checkinput_box}
            id="exampleCheck1"
          />
          <label className="form-check-label ms-2" for="exampleCheck1">
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
