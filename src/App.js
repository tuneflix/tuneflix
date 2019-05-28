import React from "react";
import Header from "./components/Shared/Header/Header";
import { HashRouter, withRouter} from "react-router-dom";
import routes from "./routes";


class App extends React.Component{
  render(){
    let header = '';

    if (this.props.location.pathname !== '/') {
      header = <Header />;
    }


    return (
      <HashRouter>
          <div className="App">
                
                  {header}
                  {routes}
              
          </div>
      </HashRouter>
    );

  }
}

export default withRouter(App);
