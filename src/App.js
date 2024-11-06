import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Story from "./pages/story";
import Cookies from "js-cookie"

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
