import NavBar from './components/NavBar';
import './App.css';
import HomePage from './components/HomePage';
import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    
    <>
    <NavBar></NavBar>
    <div >
      <HomePage></HomePage>
    </div>
    </>
  );
}

export default App;
