import React, { useState, createContext } from "react";
import Swipe from "../Swipe";
import { Switch, Route } from 'react-router-dom';
import Explore from "../explore/explore";
import About from "../about/about";
import Change from "../change/change";

export const SwipeContext = createContext();

const App = () => {
    const [ slide, setSlide ] = useState(0);
    return (
      <SwipeContext.Provider value={{ slide, setSlide }}>
        <Switch>
          <Route path="/" component={Swipe} exact />
          <Route path="/about" component={About} />
          <Route path="/explore" component={Explore} />
          <Route path="/guide" component={() => <Swipe slide={2} />} />
        </Switch>
        <Change />         
      </SwipeContext.Provider>
    );
  };

  export default App;