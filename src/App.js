import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home'
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <SingleRoom/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
    </> 
  )
}
