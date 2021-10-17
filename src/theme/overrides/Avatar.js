// ----------------------------------------------------------------------

export default function Avatar({ theme }) {
  return {
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 14,
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium,
          backgroundColor: theme.palette.primary.lighter
        }
      }
    }
  };
}
