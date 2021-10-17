import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import weather from "./reducer";

import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  weather,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Weather} />
          <Route path="/:city" component={Weather} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
