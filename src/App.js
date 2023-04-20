import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import Glitchy from "./components/glitchy/glitchy";
import React, { useState } from "react";
function App() {
  const [glitching, setGlitching] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path=":language/home" element={<Homepage />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path=":language/" element={<Homepage />} />

          <Route
            exact
            path=":language/glitchy"
            element={<Glitchy setGlitching={setGlitching} />}
          />
          <Route
            exact
            path="/glitchy"
            element={<Glitchy setGlitching={setGlitching} />}
          />

          <Route
            exact
            path="/"
            element={
              glitching === true ? (
                <Glitchy setGlitching={setGlitching} />
              ) : (
                <Homepage />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
