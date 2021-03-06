import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import Phones from "./components/phones/Phones";
import Ranking from "./components/ranking/Ranking";
import Foooter from "./components/footer/Foooter";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Nav />
    <Main />
    <Register />
    <Phones />
    <Ranking />
    <Foooter />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
