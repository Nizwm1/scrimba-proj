import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
