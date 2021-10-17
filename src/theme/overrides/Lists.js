// ----------------------------------------------------------------------

export default function Lists({ theme }) {
  return {
    // ListItemAvatar
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: 16
        }
      }
    },

    // ListItemAvatar
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: 16
        }
      }
    },

    // ListItemText
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0
        }
      }
    }
  };
}
