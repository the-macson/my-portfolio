import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* <Home/> */}
        <Routes>
          <Route path='/my-portfolio' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
