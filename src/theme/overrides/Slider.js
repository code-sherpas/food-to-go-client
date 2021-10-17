// ----------------------------------------------------------------------

export default function Slider({ theme }) {
  return {
    MuiSlider: {
      styleOverrides: {
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled
        }
      }
    }
  };
}
