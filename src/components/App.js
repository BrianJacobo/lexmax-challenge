import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "../pages/NotFound"
import Home from "../pages/Home";
import Product from "../pages/Product"
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
