import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NoMatch from "./Pages/NoMatch";
import Counter from "./Pages/Counter";
import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
