// ----------------------------------------------------------------------

export default function ControlLabel({ theme }) {
  return {
    // FormControlLabel
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...theme.typography.body2
        }
      }
    },

    // FormHelperText
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 8
        }
      }
    },

    // FormLabel
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled
        }
      }
    }
  };
}
