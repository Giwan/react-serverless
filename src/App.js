import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
    return (
        <div className="App">
            <h1>Serverless functions demo</h1>
            <Switch>
                <Route path="/admin" component={() => <h1>Admin page</h1>} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </div>
    );
}

export default App;
