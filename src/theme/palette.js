import { alpha } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// Setup Colors
const PRIMARY = {
  lighter: '#0BEED8',
  light: '#0ADBC7',
  main: '#06AC9C',
  dark: '#0A998B',
  darker: '#078478'
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A'
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A'
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D'
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01'
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E'
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const Palette = {
  // LIGHT
  light: {
    mode: 'light',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff'
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff'
    },
    info: {
      lighter: INFO.lighter,
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
      darker: INFO.darker,
      contrastText: '#fff'
    },
    success: {
      lighter: SUCCESS.lighter,
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
      darker: SUCCESS.darker,
      contrastText: GREY[800]
    },
    warning: {
      lighter: WARNING.lighter,
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
      darker: WARNING.darker,
      contrastText: GREY[800]
    },
    error: {
      lighter: ERROR.lighter,
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
      darker: ERROR.darker,
      contrastText: '#fff'
    },

    grey: GREY,
    gradients: GRADIENTS,

    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500]
    },

    divider: GREY[500_24],

    background: {
      paper: '#fff',
      default: '#fff',
      neutral: GREY[200]
    },

    action: {
      active: GREY[600],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  },

  // DARK
  dark: {
    mode: 'dark',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff'
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff'
    },
    info: {
      lighter: INFO.lighter,
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
      darker: INFO.darker,
      contrastText: '#fff'
    },
    success: {
      lighter: SUCCESS.lighter,
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
      darker: SUCCESS.darker,
      contrastText: GREY[800]
    },
    warning: {
      lighter: WARNING.lighter,
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
      darker: WARNING.darker,
      contrastText: GREY[800]
    },
    error: {
      lighter: ERROR.lighter,
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
      darker: ERROR.darker,
      contrastText: '#fff'
    },

    grey: GREY,
    gradients: GRADIENTS,

    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600]
    },

    divider: GREY[500_24],

    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16]
    },

    action: {
      active: GREY[500],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  }
};

export default Palette;
