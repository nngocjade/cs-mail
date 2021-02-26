## React Router

In this step, we'll setup the routes to the pages in our React app, e.g. Home Page, Login Page, Register Page etc.

There are two different types of Routes, one of them called `PrivateRoute` .

- Create `src/routes/PrivateRoute.js`:

```jsx
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
};

export default PrivateRoute;
```

- In this step, we'll setup the routes to the pages in our React app, e.g. Home Page, Login Page, Register Page etc.

  In `src/App.js`:

```jsx
import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import AlertMsg from "./components/AlertMsg";

import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <>
      {isAuthenticated === null ? (
        <p>Loading...</p>
      ) : (
        <Router>
          <PublicNavbar />
          <AlertMsg />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
```

Good job! [Back to instructions](/README.md)
