// ----------------------------------------------------------------------

export default function Input({ theme }) {
  return {
    // MuiInput
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        }
      }
    },

    // Filled Input
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_12],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16]
          },
          '&$focused': {
            backgroundColor: theme.palette.grey[500_12]
          },
          '&$disabled': {
            backgroundColor: theme.palette.divider
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        }
      }
    },

    // Outlined Input
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&$disabled': {
            '& $notchedOutline': {
              borderColor: theme.palette.divider
            }
          }
        },
        notchedOutline: {
          borderColor: theme.palette.grey[500_32]
        }
      }
    }
  };
}
