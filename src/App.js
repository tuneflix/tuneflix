import React from "react";
import "./app.scss";
// import "./reset.css";
import Search from "./components/Search";
import TVShow from "./components/Results/TVShow/TVShow";

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      <TVShow />
    </div>
  );
}

export default App;
