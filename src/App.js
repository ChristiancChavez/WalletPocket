import React, { useContext } from 'react';
import { StyledAppContainer, StyledDivTitle } from './App.styles.js';
import IconsCollection from './Helpers/IconsCollection';
// Components
import Span from './components/atoms/Span/Span.js';
import Home from './components/templates/Home/Home';
import InitialLogin from './components/templates/InitialLogin/InitialLogin';
import PocketCategories from './components/templates/PocketCategories/PocketCategories';
//context
import { PocketContext } from './context/PocketContext.js';
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const { showHome } = useContext(PocketContext);
  return (
    <Router>
      <StyledAppContainer>
        <IconsCollection />
        <StyledDivTitle>
          <Link to="/home">
            <Span fontSize="titleApp" weight="title" color="white" title>WALLET POCKET</Span>
          </Link>
        </StyledDivTitle>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            {showHome ? <Home /> : <InitialLogin />}
          </Route>
          <Route exact path="/create">
            <PocketCategories />
          </Route>
        </Switch>
      </StyledAppContainer>
    </Router>
  );
}

export default App;
