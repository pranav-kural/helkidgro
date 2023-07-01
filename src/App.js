import { useState } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/home/Home";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSubPage, setSubPage] = useState(0);

  return (
    <div className="App">
      <Navigation setCurrentPage={setCurrentPage} />
      {currentPage === 0 ? (
        <Home setCurrentPage={setCurrentPage} setSubPage={setSubPage} />
      ) : (
        <h1>about</h1>
      )}
    </div>
  );
}

export default App;
