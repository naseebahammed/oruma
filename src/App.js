import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Game from "./Pages/Game/Game";
import Admin from "./Pages/Admin/Admin";
import Registration from "./Pages/Registration/Registration";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
