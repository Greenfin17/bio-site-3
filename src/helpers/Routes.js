import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import SignIn from '../components/SignIn';

const AdminRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (items) => (user
    ? (<Component {...items} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: items.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AdminRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
export default function Routes({
  isAdmin,
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home /> } />
        <Route exact path='/admin_admin' component={() => <SignIn isAdmin={isAdmin} /> } />
        <Route exact path='/not-found' component={NotFound} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  isAdmin: PropTypes.bool,
};
