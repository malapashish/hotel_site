import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home'
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
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
        <Route path = "/contact" >
          <Contact/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
    </> 
  )
}
