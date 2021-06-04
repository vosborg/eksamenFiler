import React, {Component} from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Value from "./pages/value";
import Kontakt from "./pages/kontakt";
import Index from "./pages";
import Artikel from "./pages/artikel";
import Bestyrelse from "./pages/bestyrelse";
import Cases from "./pages/cases";
import Frivillig from "./pages/frivillig";
import Om from "./pages/om";
import Partner from "./pages/partner";
import Holdet from "./pages/holdet";
import Privatlivs from "./pages/privatlivs";

function App () { 
    return (
    <div> 
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/artikel" component={Artikel}/>
        <Route path="/bestyrelse" component={Bestyrelse}/>
        <Route path="/cases" component={Cases}/>
        <Route path="/frivillig" component={Frivillig}/>
        <Route path="/holdet" component={Holdet}/>
        <Route path="/kontakt" component={Kontakt}/>
        <Route path="/om" component={Om}/>
        <Route path="/partner" component={Partner}/>
        <Route path="/privatlivs" component={Privatlivs}/>
        <Route path="/value" component={Value}/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}
export default App;