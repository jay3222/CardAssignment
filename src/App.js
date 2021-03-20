import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import CardGallery from './CardGallery';

const App = () => {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/" exact component={CardGallery}/>
      <Redirect to="/" />
    </Switch>  
    </Router>
  

    </>
  )
}

export default App;
