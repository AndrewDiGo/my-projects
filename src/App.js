import React, { Component } from "react";
import Navbar from "./components/navbar";
import ImageContent from "./components/imageContent";
import ProductList from "./components/productList";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ImageContent />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
