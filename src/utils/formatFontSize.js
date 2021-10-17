import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    [breakpoints.up('sm')]: { fontSize: pxToRem(sm) },
    [breakpoints.up('md')]: { fontSize: pxToRem(md) },
    [breakpoints.up('lg')]: { fontSize: pxToRem(lg) }
  };
}
