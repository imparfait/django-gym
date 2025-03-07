
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token"); 
  const isAdmin = localStorage.getItem("isAdmin"); 

  return (
    <Route
      {...rest}
      render={(props) =>
        token && isAdmin === "true" ? ( 
          <Component {...props} /> // render the component if the admin is logged in 
        ) : (
          <Redirect to="/login" /> 
        )
      }
    />
  );
};

export default PrivateRoute;
