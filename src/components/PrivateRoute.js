import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={props =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </div>
  );
}
