import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home'
import Room from "./Pages/Room";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact"; 
import SingleRoom from "./Pages/SingleRoom"; 
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
        <Route path="/rooms">
         <Room />
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
