// ----------------------------------------------------------------------

export default function ButtonGroup({ theme }) {
  return {
    MuiButtonGroup: {
      styleOverrides: {
        contained: {
          boxShadow: theme.shadows[25].z8
        },
        groupedContainedPrimary: {
          boxShadow: theme.shadows[25].primary
        },
        groupedContainedHorizontal: {
          '&:not(:last-child)': {
            borderRight: `1px solid ${theme.palette.grey[500_32]} !important`
          }
        },
        groupedContainedVertical: {
          '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.palette.grey[500_32]} !important`
          }
        },
        groupedText: {
          '&$disabled': {
            '&:not(:last-child)': {
              borderColor: theme.palette.action.disabledBackground
            }
          }
        },
        groupedTextHorizontal: {
          '&:not(:last-child)': {
            borderRight: `1px solid ${theme.palette.grey[500_32]} !important`
          }
        },
        groupedTextVertical: {
          '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.palette.grey[500_32]} !important`
          }
        }
      }
    }
  };
}
