// ----------------------------------------------------------------------

export default function Dialog({ theme }) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[25].z24,
          '&.MuiPaper-rounded': {
            borderRadius: theme.shape.borderRadiusMd
          },
          '@media (max-width: 600px)': {
            margin: 0
          }
        },
        paperFullWidth: {
          '@media (max-width: 600px)': {
            width: 'calc(100% - 48px)'
          }
        },
        paperFullScreen: {
          width: 'calc(100% - 48px)',
          height: 'calc(100% - 48px)'
        }
      }
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 24,
          paddingBottom: 0
        }
      }
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 24
        }
      }
    },

    MuiDialogActions: {
      styleOverrides: {
        spacing: {
          padding: 24,
          '&> :not(:first-child)': {
            marginLeft: 12
          }
        }
      }
    }
  };
}
