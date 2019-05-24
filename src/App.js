import React from "react";
import Header from "./components/Shared/Header/Header"
import {HashRouter, Route} from "react-router-dom"
import routes from "./routes"
import Search from "./components/Search"


function App() {
  return (
    <div className="App">
      
      <HashRouter>
          <Route exact path ="/" component = {Search} />
          <Header />
          {routes}
      </HashRouter>
    </div>
  );
}

export default App;
