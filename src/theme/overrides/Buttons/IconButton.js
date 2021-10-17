// ----------------------------------------------------------------------

export default function IconButton({ theme }) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.grey[500_8]
          }
        }
      }
    }
  };
}
