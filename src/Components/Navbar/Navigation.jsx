import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// import { Nav } from "react-bootstrap";

function Navigation() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  return (
    <>
      <div className={styles.topnavbar}>
        <p>Powered By lettrspace.com</p>
      </div>

      {/* <div>
        <Nav variant="pills" activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link eventKey="home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === "home" && <div>This is the active tab content.</div>}
        {activeTab === "link-1" && <div>This is Option 2 content.</div>}
        {activeTab === "disabled" && <div>This tab is disabled.</div>}
      </div> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
