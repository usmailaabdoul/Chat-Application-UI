import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Components, ...rest } = props;
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    let _token = sessionStorage.getItem('Token')
    console.log({_token})
    setToken(_token);
    setLoading(false);
  }, []);

  return (
      <Route
        {...rest}
        render={(props) => (token.length === 0 && loading ? <Redirect to="login" />
          : (<Components {...props} />)
        )}
      />
  );
}

export default PrivateRoute;
