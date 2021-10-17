// ----------------------------------------------------------------------

export default function ToggleButton({ theme }) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[500_80],
          border: `solid 1px ${theme.palette.grey[500_32]}`,
          '&$selected': {
            color: theme.palette.grey[isLight ? 600 : 0],
            backgroundColor: theme.palette.action.selected
          },
          '&$disabled': {
            color: theme.palette.action.disabledBackground
          }
        }
      }
    }
  };
}
