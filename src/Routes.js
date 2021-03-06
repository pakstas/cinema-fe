import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading } from "./components";
import { Header } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/about" component={AboutLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
