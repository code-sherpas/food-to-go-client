import { alpha } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

export default function Pagination({ theme }) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&$selected': {
            fontWeight: theme.typography.fontWeightBold
          }
        },
        textPrimary: {
          '&$selected': {
            color: theme.palette.primary.main,
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.24)
            }
          }
        },

        outlined: {
          border: `1px solid ${theme.palette.grey[500_32]}`
        },
        outlinedPrimary: {
          '&$selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`
          }
        }
      }
    }
  };
}
