// ----------------------------------------------------------------------

export default function Table({ theme }) {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&$selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
          }
        }
      }
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none'
        },
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
          '&:first-child': {
            paddingLeft: 24,
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
            boxShadow: `inset 8px 0 0  ${theme.palette.background.paper}`
          },
          '&:last-child': {
            paddingRight: 24,
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            boxShadow: `inset -8px 0 0  ${theme.palette.background.paper}`
          }
        },
        stickyHeader: {
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
          backgroundColor: theme.palette.background.paper
        },
        body: {
          '&:first-child': { paddingLeft: 24 },
          '&:last-child': { paddingRight: 24 }
        }
      }
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: `solid 1px ${theme.palette.divider}`
        },
        toolbar: {
          height: 64
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius
          }
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: 2
        }
      }
    }
  };
}
