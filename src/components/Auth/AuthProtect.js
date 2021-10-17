import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PATH_PAGE } from '~/routes/paths';
import LoadingScreen from '~/components/LoadingScreen';
import { isLoaded, isEmpty } from 'react-redux-firebase';

// ----------------------------------------------------------------------

AuthProtect.propTypes = {
  children: PropTypes.node
};

function AuthProtect({ children }) {
  const { auth } = useSelector(state => state.firebase);

  if (!isLoaded(auth)) {
    return <LoadingScreen />;
  }

  if (isEmpty(auth)) {
    return <Redirect to={PATH_PAGE.auth.login} />;
  }

  return children;
}

export default AuthProtect;
