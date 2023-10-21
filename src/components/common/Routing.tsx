import React, { Component } from "react";
import Home from "../routes/Home";
import About from "../routes/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Renderer extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Renderer;
