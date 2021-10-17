import { withStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

function important(input) {
  return `${input} !important`;
}

const SHADOW = '0 8px 16px 0 rgba(145, 158, 171, 0.48)';
const BUTTON_SIZE = '28px';

const ControlStyle = withStyles(theme => ({
  '@global': {
    '.gmnoprint > div': {
      width: important('auto'),
      height: important('auto'),
      backgroundColor: important('transparent')
    },

    // Control Style Map
    '.gm-style-mtc': {
      '& button': {
        padding: important('0 10px'),
        alignItems: 'center',
        height: important(BUTTON_SIZE),
        display: important('flex'),
        fontSize: important('14px'),
        fontFamily: important(theme.typography.fontFamily),
        '&:focus': { outline: important('none') }
      },
      '& button[title="Change map style"]': {
        paddingRight: important('20px'),
        borderRadius: important('8px')
      },
      '& button[title="Show street map"]': {
        borderTopLeftRadius: important('8px'),
        borderBottomLeftRadius: important('8px')
      },
      '& button[title="Show satellite imagery"]': {
        borderTopRightRadius: important('8px'),
        borderBottomRightRadius: important('8px')
      },
      '& ul': {
        top: important('32px'),
        padding: important('0'),
        width: important('120px'),
        boxShadow: important(SHADOW),
        overflow: important('hidden'),
        borderRadius: important('8px'),
        left: important('0'),
        '& li': {
          outline: important('none'),
          padding: important('4px 12px'),
          fontFamily: important(theme.typography.fontFamily)
        }
      },
      '& div[title="Show street map with terrain"], div[title="Show imagery with street names"]': {
        display: 'flex',
        padding: important('8px'),
        outline: important('none'),
        '& > span': { marginRight: 6, marginTop: -1 }
      }
    },

    // Fullscreen Control
    'button[title="Toggle fullscreen view"]': {
      margin: important('8px'),
      width: important(BUTTON_SIZE),
      height: important(BUTTON_SIZE),
      borderRadius: important('8px'),
      backgroundColor: important(theme.palette.common.white)
    },

    // Zoom Control
    '.gm-bundled-control-on-bottom': {
      margin: important('12px'),
      '& button[title="Zoom in"], button[title="Zoom out"]': {
        width: important(BUTTON_SIZE),
        height: important(BUTTON_SIZE),
        backgroundColor: important(theme.palette.common.white),
        '& img': {
          width: important('12px'),
          height: important('12px')
        },
        '& + div': {
          margin: important('0'),
          width: important('100%'),
          backgroundColor: important(theme.palette.divider)
        }
      }
    },
    'button[title="Zoom in"]': {
      borderTopLeftRadius: important('8px'),
      borderTopRightRadius: important('8px')
    },
    'button[title="Zoom out"]': {
      borderBottomLeftRadius: important('8px'),
      borderBottomRightRadius: important('8px')
    },

    // Drawing Control
    '.gmnoprint button': {
      '&[title="Stop drawing"],&[title="Add a marker"],&[title="Draw a line"],&[title="Draw a rectangle"],&[title="Draw a circle"],&[title="Draw a shape"]': {
        display: important('flex'),
        alignItems: important('center'),
        justifyContent: important('center')
      },
      '&[title="Stop drawing"]': {
        borderTopLeftRadius: important('8px'),
        borderBottomLeftRadius: important('8px')
      },
      '&[title="Draw a shape"]': {
        borderTopRightRadius: important('8px'),
        borderBottomRightRadius: important('8px')
      }
    },

    // Street View
    '.gmnoprint > .gm-svpc': {
      boxShadow: important(SHADOW),
      width: important(BUTTON_SIZE),
      height: important(BUTTON_SIZE),
      borderRadius: important('8px'),
      backgroundColor: important(theme.palette.common.white)
    },

    // Marker Tooltip
    '.gm-style': {
      fontFamily: important(theme.typography.fontFamily)
    },
    '.gm-style-iw-c': {
      padding: important(theme.spacing(2)),
      boxShadow: important(SHADOW),
      '& button[title="Close"]': {
        top: important('4px'),
        right: important('4px'),
        width: important('24px'),
        height: important('24px'),
        display: important('flex'),
        alignItems: important('center'),
        justifyContent: important('center')
      }
    },
    '.gm-style-iw-d': { overflow: important('auto') },
    '.gm-style-iw-t': {
      '&:after': {
        top: important('-2px'),
        width: important('14px'),
        height: important('14px')
      }
    }
  }
}))(() => null);

export default ControlStyle;
