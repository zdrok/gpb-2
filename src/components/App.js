import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import ServiceList from "./ServiceList";
import Details from "./Details";

function App() {
  return (
    <div className="ui center aligned text container">
      <Router>
        <div>
          <Route path="/" exact component={ServiceList} />
          <Route path="/:id/details" exact component={Details} />
        </div>
      </Router>
    </div>
  );
}

export default App;
