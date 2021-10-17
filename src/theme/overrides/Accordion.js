// ----------------------------------------------------------------------

export default function Accordion({ theme }) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&$expanded': {
            boxShadow: theme.shadows[25].z8,
            borderRadius: theme.shape.borderRadius
          },
          '&$disabled': { backgroundColor: 'currenColor' }
        }
      }
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 8px 0 16px',
          '&$disabled': {
            opacity: 0.8,
            '& $content': {
              color: theme.palette.text.disabled
            },
            '& $expandIconWrapper': {
              color: theme.palette.text.disabled
            }
          }
        }
      }
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: 16 }
      }
    }
  };
}
