import HomeContainer from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HandleRedirectContainer from "./containers/HandleRedirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route exact path="/:shortId">
          <HandleRedirectContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
