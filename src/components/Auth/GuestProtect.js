import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PATH_APP } from '~/routes/paths';
import { Redirect } from 'react-router-dom';
import LoadingScreen from '~/components/LoadingScreen';
import { isEmpty, isLoaded } from 'react-redux-firebase';

// ----------------------------------------------------------------------

GuestProtect.propTypes = {
  children: PropTypes.node
};

function GuestProtect({ children }) {
  const { auth } = useSelector(state => state.firebase);

  if (!isLoaded(auth)) {
    return <LoadingScreen />;
  }

  if (!isEmpty(auth)) {
    return <Redirect to={PATH_APP.root} />;
  }

  return children;
}

export default GuestProtect;
