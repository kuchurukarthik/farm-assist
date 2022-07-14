import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./AppRouter";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    localStorage.clear();
    console.log("num times");
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // backgroundImage: `url(${`https://storage.googleapis.com/791f280c-aa99-4b04-bcb3-582fb42033bf/images/Background.png`})`,
      }}
    >
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
