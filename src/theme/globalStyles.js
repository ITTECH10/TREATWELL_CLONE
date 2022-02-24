// material
import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        '.PrivateDatePickerToolbar-penIcon': {
          visibility: 'hidden'
        },
        '::selection': {
          color: '#fff',
          background: theme.palette.primary.main
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          width: '100%',
          height: '100%'
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        '.map-container': {
          height: '400px',
          width: '100%'
        },
        '.mapboxgl-popup-close-button': {
          right: '2px !important',
          fontSize: 20
        },
        '.rmdp-wrapper': {
          float: 'right',
          height: 'auto'
        },
        '.rmdp-analog-clock': {
          backgroundColor: `${theme.palette.primary.main} !important`,
          border: 'none !important',
        },
        '.rmdp-analog-clock .dial-lines': {
          backgroundColor: `${theme.palette.background.paper} !important`
        },
        '.rmdp-analog-clock span': {
          color: `${theme.palette.background.paper} !important`
        },
        '.rmdp-analog-clock .rmdp-hour': {
          backgroundColor: `${theme.palette.background.paper} !important`
        },
        '.rmdp-analog-clock .rmdp-minute': {
          backgroundColor: `${theme.palette.background.paper} !important`
        },
        '.rmdp-analog-clock .rmdp-second': {
          backgroundColor: `${theme.palette.background.paper} !important`
        },
        '.rmdp-analog-clock .dot': {
          backgroundColor: `${theme.palette.background.paper} !important`
        },
        '.rmdp-day.rmdp-selected span:not(.highlight)': {
          backgroundColor: `${theme.palette.primary.main} !important`,
        },
        '.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover': {
          backgroundColor: `${theme.palette.primary.main} !important`,
        },
        '.rmdp-day.rmdp-today span': {
          backgroundColor: `${theme.palette.text.secondary} !important`,
        },
        '.rmdp-day': {
          '&:disabled': {
            backgroundColor: `${theme.palette.primary.main} !important`,
          }
        },
        '.MuiPickersDay-root.Mui-disabled': {
          // background: theme.palette.primary.light,
          // color: `${theme.palette.background.paper} !important`
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::placeholder': {
            color: theme.palette.text.disabled
          }
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        '.blur-up': {
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          transition: 'filter 400ms, -webkit-filter 400ms'
        },
        '.blur-up.lazyloaded ': {
          WebkitFilter: 'blur(0)',
          filter: 'blur(0)'
        }
      }}
    />
  );
}
