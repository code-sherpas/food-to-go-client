// ----------------------------------------------------------------------

export default function Autocomplete({ theme }) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: { boxShadow: theme.shadows[25].z20 }
      }
    }
  };
}
