import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import CreateSquare from "./CreateSquare";
import UserAcc from "./UserAcc";
import NewUser from "./NewUser";
import Deposit from "./Deposit";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/user/new" exact component={NewUser} />
        <Route path="/user/:id" exact component={UserAcc} />
        <Route path="/user/:id/edit" exact component={UserAcc} />
        <Route path="/user/:id/deposit" exact component={Deposit} />
        <Route path="/user/:id/squares/new" exact component={CreateSquare} />
        <Route
          path="/user/:id/squares/:sqid/edit"
          exact
          component={CreateSquare}
        />
        <Route
          path="/user/:id/squares/:sqid/deposit"
          exact
          component={Deposit}
        />
        <Route
          path="/user/:id/squares/:sqid/withdraw"
          exact
          component={Deposit}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
