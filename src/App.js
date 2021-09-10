import React from "react";
import { Route, Switch } from "react-router-dom";
import ExtentionMain from "./extention/ExtentionMain";
import HanumanMain from "./hanuman/HanumanMain";
import ShatruMain from "./shartru/ShatruMain";
import BharatMain from "./bharat/BharatMain";
import JobTitle from "./pages/JobTitle";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <JobTitle />
        </Route>
        <Route path="/laxman">
          <ExtentionMain />
        </Route>
        <Route path="/hanuman">
          <HanumanMain />
        </Route>
        <Route path="/shatru">
          <ShatruMain />
        </Route>
        <Route path="/bharat">
          <BharatMain />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
