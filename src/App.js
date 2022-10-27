import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import "./App.css";


function App() {
  return (
    <BrowserRouter>

      <Navigation />

    </BrowserRouter>
  );
}

export default App;
