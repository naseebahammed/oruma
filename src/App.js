import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Team from "./Pages/Team/Team";
import Game from "./Pages/Game/Game";
// import Admin from "./Pages/Admin/Admin";
import Registration from "./Pages/Registration/Registration";
import Navigation from "./Components/Navbar/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import GamesOverview from "./Pages/Game/GamesOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div
          className=""
          style={{
            backgroundColor: "#181829",
            height: "100vh",
            paddingTop: "30px",
          }}
        >
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/reg" element={<Registration />} />
              <Route path="/games" element={<Game />} />
              <Route path="/games/:id" element={<GamesOverview />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
