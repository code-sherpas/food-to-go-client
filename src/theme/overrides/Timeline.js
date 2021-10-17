// ----------------------------------------------------------------------

export default function Timeline({ theme }) {
  return {
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider
        }
      }
    }
  };
}
