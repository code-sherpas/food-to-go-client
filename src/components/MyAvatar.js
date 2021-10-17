import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import createAvatar from '~/utils/createAvatar';
import { MAvatar } from '~/@material-extend';

// ----------------------------------------------------------------------

MyAvatar.propTypes = {
  className: PropTypes.string
};

function MyAvatar({ className, ...other }) {
  const { auth, profile } = useSelector(state => state.firebase);
  const displayName = auth.displayName || profile.displayName;
  const photoURL = auth.photoURL || profile.photoURL;

  return (
    <MAvatar
      src={photoURL}
      alt={displayName}
      color={photoURL ? 'default' : createAvatar(displayName).color}
      className={className}
      {...other}
    >
      {createAvatar(displayName).name}
    </MAvatar>
  );
}

export default MyAvatar;
