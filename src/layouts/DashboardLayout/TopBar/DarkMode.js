import { Icon } from '@iconify/react';
import React, { useCallback } from 'react';
import sunFill from '@iconify-icons/eva/sun-fill';
import moonFill from '@iconify-icons/eva/moon-fill';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '~/redux/slices/dark-mode';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

function DarkMode() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);

  const onToggleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);

  return (
    <MIconButton
      onClick={onToggleTheme}
      color={darkMode ? 'primary' : 'default'}
    >
      <Icon icon={darkMode ? sunFill : moonFill} width={20} height={20} />
    </MIconButton>
  );
}

export default DarkMode;
