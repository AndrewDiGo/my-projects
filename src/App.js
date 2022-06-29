import React, { Component } from "react";
import Navbar from "./components/navbar";
import ImageContent from "./components/imageContent";
import List from "./components/lists";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ImageContent />
      <List />
    </React.Fragment>
  );
}

export default App;
