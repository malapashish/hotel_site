import React from "react";
import { Route, Switch } from "react-router";

import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div>
      <Switch>
      <Route path = '/contact' component = {Contact} ></Route>
      </Switch>
    </div>
  );
}
