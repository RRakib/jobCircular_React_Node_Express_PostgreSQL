import React, { Component } from 'react';
import Add from "./Components/Body/Add/Add";
import Nav from "./Components/Layout/Nav/Nav";
import Home from "./Components/Body/Home/Home";
import Jobs from "./Components/Body/Jobs/Jobs";
import Footer from "./Components/Layout/Footer/Footer";
import Contact from "./Components/Body/Contact/Contact";
import {BrowserRouter , Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/jobs" exact component={Jobs}/>
            <Route path="/add_jobs" exact component={Add}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
