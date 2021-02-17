import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ExercisePage from "./components/ExercisePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/1">
          <ExercisePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 
