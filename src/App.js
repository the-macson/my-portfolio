import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
