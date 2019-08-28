import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Details from "./pages/Details";
import Nav from "./components/Nav"

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                  <Route exact path="/" component={Books} />
                  <Route exact path="/movies" component={Books} />
                  <Route exact path="/movies/:id" component={Details} />
                </Switch>
            </div>
        </Router>

    );
}

export default App;