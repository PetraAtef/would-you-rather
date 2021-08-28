import React from "react";
import { Navbar } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  //const isAuthenticated = get user

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <div><Navbar></Navbar><Component {...props} /></div> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;