import React from "react";
import Styles from "./Home.module.css";


function Home() {
  const data = [
    { name: "John", rank: 1, point: 100 },
    { name: "Alice", rank: 2, point: 90 },
    { name: "Bob", rank: 3, point: 80 },
    { name: "Art", rank: 4, point: 50 },
    { name: "tfr", rank: 5, point: 30 },
    // Add more data as needed
  ];
  return (
    <>
      <div className={Styles.lt_title_head}>
        <h5>Point Table</h5>
      </div>
      <div className="">
        <table className={Styles.custom_table}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Teams</th>

              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.rank}</td>
                <td>{item.name}</td>

                <td>{item.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
