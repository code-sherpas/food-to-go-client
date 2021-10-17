// ----------------------------------------------------------------------

export default function Fab({ theme }) {
  return {
    MuiFab: {
      defaultProps: {
        color: 'primary'
      },

      styleOverrides: {
        root: {
          color: theme.palette.grey[800],
          boxShadow: theme.shadows[25].z8,
          backgroundColor: theme.palette.grey[300],
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.grey[400]
          }
        },
        primary: {
          boxShadow: theme.shadows[25].primary
        }
      }
    }
  };
}
