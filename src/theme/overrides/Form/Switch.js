// ----------------------------------------------------------------------

export default function Switch({ theme }) {
  const isLight = theme.palette.mode === 'light';
  return {
    MuiSwitch: {
      defaultProps: {
        color: 'primary'
      },

      styleOverrides: {
        root: {},
        thumb: {
          boxShadow: theme.shadows[25].z1
        },
        track: {
          opacity: 1,
          backgroundColor: theme.palette.grey[500_80]
        },
        switchBase: {
          color: theme.palette.grey[isLight ? 100 : 300],
          '&$disabled': {
            color: `${theme.palette.grey[isLight ? 400 : 600]} !important`
          },
          '&$disabled + $track': {
            opacity: 1,
            backgroundColor: `${theme.palette.action.disabledBackground} !important`
          }
        }
      }
    }
  };
}
