import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Faq from "./components/Faq";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Faq }  path="/faq" />
       </BrowserRouter>
   )
}

export default Routes;