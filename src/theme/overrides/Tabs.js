// ----------------------------------------------------------------------

export default function Tabs({ theme }) {
  return {
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'primary'
      }
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: 40,
          fontWeight: theme.typography.fontWeightMedium,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          '&$selected': {
            color: 'inherit'
          },
          '&:last-child': {
            marginRight: 0
          },
          '@media (min-width: 600px)': {
            minWidth: 48
          }
        },
        wrapper: {
          flexDirection: 'row'
        },
        textColorInherit: {
          opacity: 1,
          color: theme.palette.text.secondary
        },
        labelIcon: {
          minHeight: 48,
          paddingTop: 0,
          '& $wrapper': {
            '& > *:first-child': { marginBottom: 0, marginRight: 8 }
          }
        }
      }
    },

    MuiTabPanel: {
      styleOverrides: {
        root: { padding: 0 }
      }
    },

    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          width: 48,
          borderRadius: '50%'
        }
      }
    }
  };
}
