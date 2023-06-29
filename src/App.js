import { useState } from "react";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App">
      <Navigation setCurrentPage={setCurrentPage} />
      {currentPage === 0 ? <h1>home</h1> : <h1>about</h1>}
    </div>
  );
}

export default App;
